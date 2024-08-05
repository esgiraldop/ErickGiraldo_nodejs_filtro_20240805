import { Router } from "express";
import { OrderController } from "../controllers/orders.controller";

const OrdersRoutes:Router = Router();

OrdersRoutes.get('/', OrderController.getAllOrders);
OrdersRoutes.get('/:id/products', OrderController.getProductsByOrder);
OrdersRoutes.post('/', OrderController.createOrder);
OrdersRoutes.put('/:id', OrderController.updateOrder);
OrdersRoutes.delete('/:id', OrderController.deleteOrder);

export default OrdersRoutes;