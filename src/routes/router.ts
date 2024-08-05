import { Router } from "express";
import ProductRoutes from "./products.routes";

const Routes = Router()

Routes.use('/products', ProductRoutes);

export default Routes