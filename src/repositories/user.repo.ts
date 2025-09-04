import { User, IUser } from "../models/user.model";

export async function findUserByEmail(email: string) {
  return User.findOne({ email });
}

export async function createUser(data: Pick<IUser, "name"|"email"|"passwordHash">) {
  const user = new User(data);
  return user.save();
}
