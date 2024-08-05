import { container } from "tsyringe";
import { ProductController } from "../controllers/products.controller";
import { ProductServices } from "../services/products.services";
import { ProductRepository } from "../repositories/products.repository";

container.register(ProductController, {
    useClass: ProductController
})

container.register(ProductServices, {
    useClass: ProductServices
})

container.register(ProductRepository, {
    useClass: ProductRepository
})