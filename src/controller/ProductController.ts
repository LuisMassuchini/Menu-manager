import { ProductService  } from "../service/ProductService";

export class ProductController {
private service: ProductService;

constructor() {
    this.service = new ProductService();
}

    public create = async (req, res) => {
        try {

    
            const newProduct = await this.service.create(req.body);
    
            if(newProduct === null) {
                return res.status(409).json({
                    message: 'The registration of the new product have failed'
                  });
            } else {
                return res.status(201).json({
                    message: 'Register successfully created',
                    newProduct,
                });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    public findAll = async(req, res) => {
        try {
            const productList = await this.service.findAll();

            if(productList.length === 0) {
                return res.status(404).json({
                    message: 'The are no products registered'
                  });
            } else {
                return res.status(200).json({
                    message: productList.length + ' products were found!',
                    productList,
                });
            }
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    public findById = async(req, res) => {
        try {
            const product = await this.service.findById(req.params.id);

            if(product === null) {
                return res.status(404).json({
                    message: 'It was not possible to find this product.',
                    details: 'Not Found',
                  });
            } else {
                return res.status(200).json({
                    message: 'Product found!',
                    product,
                });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
 
        }
        
    }

    public update = async(req, res) => {
        try {
            const product = await this.service.update(req.params.id, req.body);

            if (product === null) {
                return res.status(404).json({
                  message: 'It was not possible to update the product',
                  details: 'Not Found',
                });
              }

              return res.status(200).json({
                message: 'Product successfully updated',
                product,
              });
        } catch (error) {
            return res.status(500).json({ message: error.message });

        }

    }

    public delete = async(req, res) => {
        try {
            const product = await this.service.delete(req.params.id);

            if (product === null) {
                return res.status(404).json({
                  message: 'It was not possible to delete the product',
                  details: 'Not Found',
                });
              }

              return res.status(200).json({
                message: 'Product successfully deleted',
                product,
              });

        } catch (error) {
            return res.status(500).json({ message: error.message });

        }
    }

}