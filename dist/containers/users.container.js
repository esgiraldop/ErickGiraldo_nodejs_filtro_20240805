"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const users_controller_1 = require("../controllers/users.controller");
const users_services_1 = require("../services/users.services");
const users_repository_1 = require("../repositories/users.repository");
tsyringe_1.container.register(users_controller_1.UserController, {
    useClass: users_controller_1.UserController
});
tsyringe_1.container.register(users_services_1.UserServices, {
    useClass: users_services_1.UserServices
});
tsyringe_1.container.register(users_repository_1.UserRepository, {
    useClass: users_repository_1.UserRepository
});
