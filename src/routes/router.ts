import { Router } from "express";
import ProductRoutes from "./products.routes";
import OrdersRoutes from "./orders.routes";
import UsersRoutes from "./users.routes";
import ProductCartRoutes from "./productCarts.routes";
import AuthRoutes from "./auth.routes";

const Routes = Router()

Routes.use('/products', ProductRoutes);
Routes.use('/orders', OrdersRoutes);
Routes.use('/users', UsersRoutes);
Routes.use('/productCarts', ProductCartRoutes);
Routes.use('/auth', AuthRoutes);

export default Routes