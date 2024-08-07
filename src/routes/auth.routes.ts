import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const AuthRoutes = Router();

AuthRoutes.post('/login', AuthController.login);
AuthRoutes.post('/register', AuthController.register);

export default AuthRoutes;