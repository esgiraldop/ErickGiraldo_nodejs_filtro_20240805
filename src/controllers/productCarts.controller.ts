import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { ProductCartServices } from "../services/productCarts.services";

@injectable()
export class ProductCartController{

    static async getAllProductCarts(_: Request, res:Response){
        try{
            const productCartService = container.resolve(ProductCartServices)
            const response = await productCartService.getAllProductCarts()
            if(!response){
                res.status(200).json({
                    message: "No products found in the cart",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Products in the cart returned succesfully"
                })
            }
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({
                    status: 500,
                    message: `Error in the database: ${error.message}`
                })
            }
        }
    }

    static async createProductCarts(req: Request, res:Response){
        try{
            const productCartService = container.resolve(ProductCartServices);
            const response = await productCartService.createProductCarts(req.body);
            if(!response){
                res.status(200).json({
                    message: "No product created in the cart",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Products created succesfully in the cart"
                })
            }
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({
                    status: 500,
                    message: `Error in the database: ${error.message}`
                })
            }
        }
    }

    static async updateProductCart(req: Request, res:Response){
        try{
            const productCartService = container.resolve(ProductCartServices);
            const response = await productCartService.updateProductCart(req.params.id, req.body);
            res.status(200).json({
                status: 200,
                data: response,
                message: "Product updated succesfully in the cart"
            })
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({
                    status: 500,
                    message: `Error in the database: ${error.message}`
                })
            }
        }
    }

    static async deleteProductCart(req: Request, res:Response){
        try{
            const productCartService = container.resolve(ProductCartServices);
            const response = await productCartService.deleteProductCart(req.params.id);
            res.status(200).json({
                status: 200,
                data: response,
                message: "Product deleted succesfully from the cart"
            })
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({
                    status: 500,
                    message: `Error in the database: ${error.message}`
                })
            }
        }
    }
}