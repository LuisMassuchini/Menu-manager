import { ProductRequest } from "../interface/Product";
import { Category } from "../interface/Category";


const ProductSchema = require('../model/ProductSchema');
const CategorySchema = require('../model/CategorySchema');

export class ProductService {
    public create = async (product: ProductRequest) => {
        const {
            category,
            name,
            qty,
            price
        } = product;

        const categories = await CategorySchema.findById(category);

        const newProductRegister = ProductSchema({
            name,
            qty,
            price
        });
        if(categories != null) {
            newProductRegister.categories.push(categories);
        }
        
            await newProductRegister.save();
    
            const findProduct = await ProductSchema.find(newProductRegister);
            return findProduct;

    };

    public findAll = async() => {

            const findProduct = await ProductSchema.find();
            return findProduct;

    }

    public findById = async(id: String) => {
        const findProduct = await ProductSchema.findById(id);

        return findProduct;

    }

    public update = async(id: String, product: ProductRequest) => {
        const {
            category,
            name,
            qty,
            price
        } = product;


        const findProduct = await ProductSchema.findById(id);
        if(findProduct === null) {
            return null;
        }

    findProduct.name = name || findProduct.name;
    findProduct.qty = qty || findProduct.qty;
    findProduct.price = price || findProduct.price;

    if(category != null){
        const findCategory = await CategorySchema.findById(category);
        if(findCategory != null) {
            const categoryArray = findProduct.categories;
            const categoriesArray = categoryArray.find((item: Category) =>
            item.name == findCategory.name)

            if(categoriesArray == undefined || categoriesArray == null) {
                findProduct.categories.push(findCategory);
            }
        }

    }

    const updatedProduct = await findProduct.save();

    return updatedProduct;
    }

    public delete = async(id: String) => {

        const findProduct = await ProductSchema.findById(id);
        if(findProduct === null) {
            return null;
        }
          await findProduct.delete();
          return findProduct;

    }
}