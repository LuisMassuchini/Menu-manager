import { Schema } from 'mongoose';

export interface Category {
  _id: Schema.Types.ObjectId;
  parent: Category | null;
  name: string;

}