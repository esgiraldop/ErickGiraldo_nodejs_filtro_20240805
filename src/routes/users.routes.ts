import { Router } from "express";
import { UserController } from "../controllers/users.controller";

const UsersRoutes:Router = Router();

UsersRoutes.get('/', UserController.getAllUsers);
UsersRoutes.get('/:id/orders', UserController.getOrdersByUser);
UsersRoutes.post('/', UserController.createUser);
UsersRoutes.put('/:id', UserController.updateUser);
UsersRoutes.delete('/:id', UserController.deleteUser);

export default UsersRoutes;