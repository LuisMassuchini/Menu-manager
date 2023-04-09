import * as express from 'express';
import * as cors from 'cors';
import * as dotenvsafe from 'dotenv-safe';
import { DB } from './database/DBConfig';
import { ProductRouter } from './router/ProductRouter';
import { CategoryRouter } from './router/CategoryRouter';
import { AuthRouter } from './router/AuthRouter';

dotenvsafe.config();
export class App {
    public app: any;
    private db: DB;
    private productRouter: ProductRouter;
    private categoryRouter: CategoryRouter;
    private authRouter: AuthRouter;


    constructor() {
        this.app = express();
        this.db = new DB();
        this.productRouter = new ProductRouter();
        this.categoryRouter = new CategoryRouter();
        this.authRouter = new AuthRouter();


    }

    public server() {
        this.app.use(cors());
        this.db.connection();
        this.app.use(express.json());

        this.app.use('/product', this.productRouter.path());
        this.app.use('/category', this.categoryRouter.path());
        this.app.use('/auth', this.authRouter.path());


        return this.app;

    }
}