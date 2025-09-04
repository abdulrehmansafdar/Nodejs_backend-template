import jwt from "jsonwebtoken";
import { env } from "../config/env";

export function signJwt(payload: object) {
  if (!env.jwtSecret) {
    throw new Error("JWT secret is not defined");
  }
  return jwt.sign(payload, env.jwtSecret as jwt.Secret, { expiresIn: env.jwtExpiresIn as jwt.SignOptions["expiresIn"] });
}

export function verifyJwt<T = any>(token: string): T {
  if (!env.jwtSecret) {
    throw new Error("JWT secret is not defined");
  }
  return jwt.verify(token, env.jwtSecret as jwt.Secret) as T;
}
