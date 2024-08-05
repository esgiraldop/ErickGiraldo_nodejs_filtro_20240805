import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { OrderServices } from "../services/orders.services";

@injectable()
export class OrderController{

    static async getAllOrders(_: Request, res:Response){
        try{
            const orderService = container.resolve(OrderServices)
            const response = await orderService.getAllProducts()
            if(!response){
                res.status(200).json({
                    message: "No products found",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Products returned succesfully"
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

    static async createOrder(req: Request, res:Response){
        try{
            const orderService = container.resolve(OrderServices);
            const response = await orderService.createProduct(req.body);
            if(!response){
                res.status(200).json({
                    message: "No product created",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Products created succesfully"
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

    static async updateOrder(req: Request, res:Response){
        try{
            const orderService = container.resolve(OrderServices);
            const response = await orderService.updateProduct(req.params.id, req.body);
            res.status(200).json({
                status: 200,
                data: response,
                message: "Product updated succesfully"
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

    static async deleteOrder(req: Request, res:Response){
        try{
            const productService = container.resolve(OrderServices);
            const response = await productService.deleteProduct(req.params.id);
            res.status(200).json({
                status: 200,
                data: response,
                message: "Product deleted succesfully"
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

    static async getProductsByOrder(req: Request, res:Response){
        try{
            const orderService = container.resolve(OrderServices);
            const response = await orderService.getProductsByOrder(req.params.id);
            if(!response){
                res.status(200).json({
                    message: "No products by order could be retrieved",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Products by order returned sucessfully"
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
}