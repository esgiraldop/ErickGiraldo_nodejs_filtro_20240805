import { container } from "tsyringe";
import { UserController } from "../controllers/users.controller";
import { UserServices } from "../services/users.services";
import { UserRepository } from "../repositories/users.repository";

container.register(UserController, {
    useClass: UserController
})

container.register(UserServices, {
    useClass: UserServices
})

container.register(UserRepository, {
    useClass: UserRepository
})