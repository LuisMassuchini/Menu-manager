import {  Router } from "express";
import { ProductController } from "../controller/ProductController";
import { Auth } from "../middleware/Auth";

export class ProductRouter {
    private router: Router;
    private controller: ProductController;
    private auth: Auth;

    constructor() {
        this.router = Router();
        this.controller = new ProductController();
        this.auth = new Auth();
    }

    public path() {

        this.router.post('/', this.auth.checkAuth, this.controller.create);
        this.router.get('/', this.auth.checkAuth, this.controller.findAll);
        this.router.get('/:id', this.auth.checkAuth, this.controller.findById);
        this.router.delete('/:id', this.auth.checkAuth, this.controller.delete);
        this.router.patch('/:id', this.auth.checkAuth, this.controller.update);


        return this.router;

    }
}


