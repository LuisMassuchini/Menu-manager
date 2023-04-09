import { Category } from "./Category";
import { Schema } from 'mongoose';

export interface Product {
    _id: Schema.Types.ObjectId;
    categories: Category[];
    name: String;
    qty: Number;
    price: Number;
}

export interface ProductRequest {
    category: String;
    name: String;
    qty: Number;
    price: Number;
}