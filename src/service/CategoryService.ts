const CategorySchema = require('../model/CategorySchema');

export class CategoryService {

    public findAll = async() => {

        const findCategory = await CategorySchema.find();
        return findCategory;

}
}