import { container, injectable } from "tsyringe";
import { AuthServices } from "../services/auth.services";
import { Request, Response } from "express";

@injectable()
export class AuthController {

   static async login(req: Request, res: Response): Promise<void> {
        try {
            const {email, password} = req.body;
            const authService = container.resolve(AuthServices);
            const token = await authService.login(email, password);
            if(token) {
                res.status(200).json({
                    status: 200,
                    message: "Login successful",
                    token
                });
            }else{
                res.status(401).json({
                    status: 401,
                    message: "Invalid email or password"
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            });
        }
    };

    static async register(req: Request, res: Response): Promise<void> {
        try{
            const authService = container.resolve(AuthServices);
            const user = await authService.createUser(req.body);
            if (!user) {
                res.status(200).json({
                    status: 200,
                    message: "Registration failed"
                })
            }else{
                res.status(200).json({
                    status: 200,
                    message: "Registration was done successfully",
                    data: user
                }
                )
            }
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({
                status: 500,
                message: error.message
            })
            }
        }
    };
};