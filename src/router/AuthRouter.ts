import {  Router } from "express";
import { AuthController } from "../controller/AuthController";

export class AuthRouter {
    private router: Router;
    private controller: AuthController;

    constructor() {
        this.router = Router();
        this.controller = new AuthController();
    }

    public path() {

        this.router.post('/login', this.controller.signIn);
      
        return this.router;

    }
}