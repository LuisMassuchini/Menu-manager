import { Schema } from 'mongoose';

export interface Admin {
  _id: Schema.Types.ObjectId;
  email: string;
  username: string;
  password: string;
}

export interface AdminRequest {
  email: string;
  username: string;
  password: string;
}
