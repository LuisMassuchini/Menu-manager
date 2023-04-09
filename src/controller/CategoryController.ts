import { CategoryService  } from "../service/CategoryService";

export class CategoryController {
    private service: CategoryService;
    
    constructor() {
        this.service = new CategoryService();
    }

    public findAll = async(req, res) => {
        try {
            const categoryList = await this.service.findAll();

            if(categoryList.length === 0) {
                return res.status(404).json({
                    message: 'The are no categories registered'
                  });
            } else {
                return res.status(200).json({
                    message: categoryList.length + ' categories were found!',
                    categoryList,
                });
            }
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

}