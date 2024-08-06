"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productCarts_controller_1 = require("../controllers/productCarts.controller");
const productCarts_services_1 = require("../services/productCarts.services");
const productCarts_repository_1 = require("../repositories/productCarts.repository");
tsyringe_1.container.register(productCarts_controller_1.ProductCartController, {
    useClass: productCarts_controller_1.ProductCartController
});
tsyringe_1.container.register(productCarts_services_1.ProductCartServices, {
    useClass: productCarts_services_1.ProductCartServices
});
tsyringe_1.container.register(productCarts_repository_1.ProductCartRepository, {
    useClass: productCarts_repository_1.ProductCartRepository
});
