import { createUser, findUserByEmail } from "../repositories/user.repo";
import { hashPassword, comparePassword } from "../utils/password";
import { signJwt } from "../utils/jwt";

export async function signup(name: string, email: string, password: string) {
  const exists = await findUserByEmail(email);
  if (exists) throw new Error("Email already registered.");

  const passwordHash = await hashPassword(password);
  const user = await createUser({ name, email, passwordHash });
  const token = signJwt({ sub: user._id, email: user.email });

  return { user: { id: user._id, name: user.name, email: user.email }, token };
}

export async function login(email: string, password: string) {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid credentials.");

  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) throw new Error("Invalid credentials.");

  const token = signJwt({ sub: user._id, email: user.email });
  return { user: { id: user._id, name: user.name, email: user.email }, token };
}
