import { Router } from "express";
import { ProductCartController } from "../controllers/productCarts.controller"; 

const ProductCartRoutes:Router = Router();

ProductCartRoutes.get('/', ProductCartController.getAllProductCarts);
ProductCartRoutes.post('/', ProductCartController.createProductCarts);
ProductCartRoutes.put('/:id', ProductCartController.updateProductCart);
ProductCartRoutes.delete('/:id', ProductCartController.deleteProductCart);


export default ProductCartRoutes;