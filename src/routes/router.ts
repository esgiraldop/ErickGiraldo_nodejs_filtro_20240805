import { Router } from "express";
import ProductRoutes from "./products.routes";
import OrdersRoutes from "./orders.routes";
import UsersRoutes from "./users.routes";

const Routes = Router()

Routes.use('/products', ProductRoutes);
Routes.use('/orders', OrdersRoutes);
Routes.use('/users', UsersRoutes);

export default Routes