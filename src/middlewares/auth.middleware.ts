import {Request, Response, NextFunction} from "express"
import { JWT_KEY } from "../services/auth.services";
import jwt from "jsonwebtoken";

const publicPaths = ['/login', '/register']

export const authMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const pathSegments = req.path.split('/');
    const pathLast = '/'+pathSegments[pathSegments.length - 1]
    if (publicPaths.includes(pathLast)) {
        return next();
    }
    
    const token = req.headers.authorization?.split(' ')[1];
    if(token){
        jwt.verify(token, JWT_KEY, (err, decoded) => {
            if(err){
                return res.status(401).json({message: 'Invalid token'});
            }
            req.body.user = decoded;
            next();
        })
    }else{
        return res.status(401).json({message: 'Token not provided'});
    }
}