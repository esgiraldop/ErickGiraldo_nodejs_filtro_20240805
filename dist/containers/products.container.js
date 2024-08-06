"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const products_controller_1 = require("../controllers/products.controller");
const products_services_1 = require("../services/products.services");
const products_repository_1 = require("../repositories/products.repository");
tsyringe_1.container.register(products_controller_1.ProductController, {
    useClass: products_controller_1.ProductController
});
tsyringe_1.container.register(products_services_1.ProductServices, {
    useClass: products_services_1.ProductServices
});
tsyringe_1.container.register(products_repository_1.ProductRepository, {
    useClass: products_repository_1.ProductRepository
});
