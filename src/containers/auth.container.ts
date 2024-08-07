import { container } from "tsyringe";
import { AuthController } from "../controllers/auth.controller";
import { AuthServices } from "../services/auth.services";

container.register(AuthController, {
    useClass: AuthController
})

container.register(AuthServices, {
    useClass: AuthServices
})