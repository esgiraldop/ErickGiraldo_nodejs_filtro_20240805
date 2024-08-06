"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
const ProductRoutes = (0, express_1.Router)();
ProductRoutes.get('/', products_controller_1.ProductController.getAllProducts);
ProductRoutes.post('/', products_controller_1.ProductController.createProducts);
ProductRoutes.put('/:id', products_controller_1.ProductController.updateProducts);
ProductRoutes.delete('/:id', products_controller_1.ProductController.deleteProduct);
exports.default = ProductRoutes;
