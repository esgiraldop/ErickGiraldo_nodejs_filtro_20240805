import { container } from "tsyringe";
import { ProductCartController } from "../controllers/productCarts.controller";
import { ProductCartServices } from "../services/productCarts.services";
import { ProductCartRepository } from "../repositories/productCarts.repository"; 

container.register(ProductCartController, {
    useClass: ProductCartController
})

container.register(ProductCartServices, {
    useClass: ProductCartServices
})

container.register(ProductCartRepository, {
    useClass: ProductCartRepository
})