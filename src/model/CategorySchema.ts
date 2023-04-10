import { Category } from "../interface/Category";
import { Schema, model, Types } from 'mongoose';

const categorySchema = new Schema<Category>({
  _id: {
    type: Types.ObjectId,
    default: Types.ObjectId,
  },
  parent: {
    type: [Object],
    required: false,
  },
  name: {
    type: String,
    required: true,
  }
});

module.exports = model('category', categorySchema);