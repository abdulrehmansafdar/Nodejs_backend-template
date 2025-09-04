import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt";

export interface AuthRequest extends Request {
  user?: { sub: string; email: string };
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization; // "Bearer <token>"
    if (!header?.startsWith("Bearer ")) return res.status(401).json({ message: "Missing or invalid Authorization header" });

    const token = header.split(" ")[1];
    const payload = verifyJwt<{ sub: string; email: string }>(token);
    req.user = { sub: payload.sub, email: payload.email };
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
