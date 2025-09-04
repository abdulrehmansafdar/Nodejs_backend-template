import { Request, Response, NextFunction } from "express";
import { login, signup } from "../services/auth.service";

export async function handleSignup(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "name, email, password required" });

    const result = await signup(name, email, password);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

export async function handleLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "email, password required" });

    const result = await login(email, password);
    res.json(result);
  } catch (err) {
    next(err);
  }
}
