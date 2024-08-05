import { Router } from "express";
import ProductRoutes from "./products.routes";
import OrdersRoutes from "./orders.routes";

const Routes = Router()

Routes.use('/products', ProductRoutes);
Routes.use('/products', OrdersRoutes);

export default Routes