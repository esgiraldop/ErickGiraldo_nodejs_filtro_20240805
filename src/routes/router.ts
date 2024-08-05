import { Router } from "express";
import ProductRoutes from "./products.routes";
import OrdersRoutes from "./orders.routes";

const Routes = Router()

Routes.use('/products', ProductRoutes);
Routes.use('/orders', OrdersRoutes);

export default Routes