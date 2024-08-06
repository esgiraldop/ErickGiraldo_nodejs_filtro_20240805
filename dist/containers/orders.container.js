"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const orders_controller_1 = require("../controllers/orders.controller");
const orders_services_1 = require("../services/orders.services");
const orders_repository_1 = require("../repositories/orders.repository");
tsyringe_1.container.register(orders_controller_1.OrderController, {
    useClass: orders_controller_1.OrderController
});
tsyringe_1.container.register(orders_services_1.OrderServices, {
    useClass: orders_services_1.OrderServices
});
tsyringe_1.container.register(orders_repository_1.OrderRepository, {
    useClass: orders_repository_1.OrderRepository
});
