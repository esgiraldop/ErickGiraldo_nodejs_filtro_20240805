import { Router } from "express";
import { ProductController } from "../controllers/products.controller";

const ProductRoutes:Router = Router();

ProductRoutes.get('/', ProductController.getAllProducts);
// ProductRoutes.get('/', ProductController.getProductById);
ProductRoutes.post('/', ProductController.createProducts);
ProductRoutes.put('/:id', ProductController.updateProducts);
ProductRoutes.delete('/:id', ProductController.deleteProduct);


export default ProductRoutes;