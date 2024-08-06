"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const products_model_1 = require("../models/products.model");
const productCarts_model_1 = require("../models/productCarts.model");
const orders_model_1 = require("../models/orders.model");
const users_model_1 = require("../models/users.model");
const roles_model_1 = require("../models/roles.model");
const carts_model_1 = require("../models/carts.model");
dotenv_1.default.config();
const sequelizeConfig = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [products_model_1.Product, productCarts_model_1.ProductCart, orders_model_1.Orders, users_model_1.Users, roles_model_1.Roles, carts_model_1.Carts],
});
exports.default = sequelizeConfig;
