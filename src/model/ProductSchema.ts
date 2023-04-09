import { Product } from "../interface/Product";
import { Schema, model, Types } from 'mongoose';

const productSchema = new Schema<Product>({
  _id: {
    type: Types.ObjectId,
    default: Types.ObjectId,
  },
  categories: {
    type: [Object],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

module.exports = model('product', productSchema);

