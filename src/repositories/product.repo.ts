import { Product, IProduct } from "../models/product.model";
import { Types } from "mongoose";

export async function createProduct(data: Omit<IProduct, "id">) {
  const product = new Product(data);
  return product.save();
}

export async function getProducts(owner: Types.ObjectId) {
  return Product.find({ owner }).sort({ createdAt: -1 });
}

export async function getProductById(id: string, owner: Types.ObjectId) {
  return Product.findOne({ _id: id, owner });
}

export async function updateProduct(id: string, owner: Types.ObjectId, update: Partial<IProduct>) {
  return Product.findOneAndUpdate({ _id: id, owner }, update, { new: true });
}

export async function deleteProduct(id: string, owner: Types.ObjectId) {
  return Product.findOneAndDelete({ _id: id, owner });
}
