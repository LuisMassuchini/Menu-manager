import { Admin } from "../interface/Admin";
import { Schema, model, Types } from 'mongoose';

const adminSchema = new Schema<Admin>({
  _id: {
    type: Types.ObjectId,
    default: Types.ObjectId,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = model('admin', adminSchema);