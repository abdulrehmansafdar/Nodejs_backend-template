import { Router } from "express";
import { authRouter } from "./auth.routes";
import { productRouter } from "./product.routes";

export const router = Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);

router.get("/health", (_req, res) => res.json({ ok: true }));
