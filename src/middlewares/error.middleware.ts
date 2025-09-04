import { Request, Response, NextFunction } from "express";

export function errorMiddleware(err: any, _req: Request, res: Response, _next: NextFunction) {
  console.error("Error:", err);
  const status = err.statusCode || 400;
  const message = err.message || "Unexpected error";
  res.status(status).json({ message });
}
