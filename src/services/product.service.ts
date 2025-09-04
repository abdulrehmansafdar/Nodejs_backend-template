import { Types } from "mongoose";
import {
  createProduct, deleteProduct, getProductById,
  getProducts, updateProduct
} from "../repositories/product.repo";

export async function createProductForUser(
  ownerId: string,
  input: { title: string; description?: string; price: number; inStock?: boolean; }
) {
  const owner = new Types.ObjectId(ownerId);
  return createProduct({ owner, title: input.title, description: input.description, price: input.price, inStock: input.inStock ?? true } as any);
}

export async function listMyProducts(ownerId: string) {
  return getProducts(new Types.ObjectId(ownerId));
}

export async function getMyProduct(ownerId: string, productId: string) {
  return getProductById(productId, new Types.ObjectId(ownerId));
}

export async function updateMyProduct(ownerId: string, productId: string, update: Partial<{title:string;description?:string;price:number;inStock:boolean;}>) {
  return updateProduct(productId, new Types.ObjectId(ownerId), update as any);
}

export async function deleteMyProduct(ownerId: string, productId: string) {
  return deleteProduct(productId, new Types.ObjectId(ownerId));
}
