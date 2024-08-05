import { container } from "tsyringe";
import { OrderController } from "../controllers/orders.controller";
import { OrderServices } from "../services/orders.services";
import { OrderRepository } from "../repositories/orders.repository";

container.register(OrderController, {
    useClass: OrderController
})

container.register(OrderServices, {
    useClass: OrderServices
})

container.register(OrderRepository, {
    useClass: OrderRepository
})