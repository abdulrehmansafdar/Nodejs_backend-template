import { Response, NextFunction } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { createProductForUser, deleteMyProduct, getMyProduct, listMyProducts, updateMyProduct } from "../services/product.service";

export async function createProduct(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const ownerId = req.user!.sub;
    const { title, description, price, inStock } = req.body;
    if (!title || typeof price !== "number") return res.status(400).json({ message: "title and price are required" });

    const product = await createProductForUser(ownerId, { title, description, price, inStock });
    res.status(201).json(product);
  } catch (err) { next(err); }
}

export async function getProducts(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const ownerId = req.user!.sub;
    const products = await listMyProducts(ownerId);
    res.json(products);
  } catch (err) { next(err); }
}

export async function getProduct(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const ownerId = req.user!.sub;
    const product = await getMyProduct(ownerId, req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  } catch (err) { next(err); }
}

export async function updateProductById(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const ownerId = req.user!.sub;
    const updated = await updateMyProduct(ownerId, req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) { next(err); }
}

export async function deleteProductById(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const ownerId = req.user!.sub;
    const deleted = await deleteMyProduct(ownerId, req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) { next(err); }
}
