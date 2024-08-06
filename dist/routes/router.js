"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_routes_1 = __importDefault(require("./products.routes"));
const orders_routes_1 = __importDefault(require("./orders.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const productCarts_routes_1 = __importDefault(require("./productCarts.routes"));
const Routes = (0, express_1.Router)();
Routes.use('/products', products_routes_1.default);
Routes.use('/orders', orders_routes_1.default);
Routes.use('/users', users_routes_1.default);
Routes.use('/productCarts', productCarts_routes_1.default);
exports.default = Routes;
