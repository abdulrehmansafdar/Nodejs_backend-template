import { Schema, model, Document, Types } from "mongoose";

export interface IProduct extends Document {
  owner: Types.ObjectId;     // who created it
  title: string;
  description?: string;
  price: number;
  inStock: boolean;
}

const productSchema = new Schema<IProduct>(
  {
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Product = model<IProduct>("Product", productSchema);
