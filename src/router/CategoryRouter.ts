import {  Router } from "express";
import { CategoryController } from "../controller/CategoryController";
import { Auth } from "../middleware/Auth";


export class CategoryRouter {

    private router: Router;
    private controller: CategoryController;
    private auth: Auth;

    constructor() {
        this.router = Router();
        this.controller = new CategoryController();
        this.auth = new Auth();
    }

    public path() {

        this.router.get('/', this.auth.checkAuth, this.controller.findAll);
      
        return this.router;

    }
    
}





