import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { UserServices } from "../services/users.services";

@injectable()
export class UserController{

    static async getAllUsers(_: Request, res:Response){
        try{
            const userService = container.resolve(UserServices)
            const response = await userService.getAllUsers()
            if(!response){
                res.status(200).json({
                    message: "No users found",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Users returned succesfully"
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

    static async createUser(req: Request, res:Response){
        try{
            const userService = container.resolve(UserServices);
            const response = await userService.createUser(req.body);
            if(!response){
                res.status(200).json({
                    message: "No user created",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Users created succesfully"
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

    static async updateUser(req: Request, res:Response){
        try{
            const userService = container.resolve(UserServices);
            const response = await userService.updateUser(req.params.id, req.body);
            res.status(200).json({
                status: 200,
                data: response,
                message: "User updated succesfully"
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

    static async deleteUser(req: Request, res:Response){
        try{
            const productService = container.resolve(UserServices);
            const response = await productService.deleteUser(req.params.id);
            res.status(200).json({
                status: 200,
                data: response,
                message: "User deleted succesfully"
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

    static async getOrdersByUser(req: Request, res:Response){
        try{
            const userService = container.resolve(UserServices);
            const response = await userService.getOrdersByUser(req.params.id);
            if(!response){
                res.status(200).json({
                    message: "No orders by user could be retrieved",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Orders by user returned sucessfully"
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