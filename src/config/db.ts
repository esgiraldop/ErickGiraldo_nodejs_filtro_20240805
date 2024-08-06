import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
import { Product } from "../models/products.model";
import { ProductCart } from "../models/productCarts.model";
import { Orders } from "../models/orders.model";
import { Users } from "../models/users.model";
import { Roles } from "../models/roles.model";
import { Carts } from "../models/carts.model";

dotenv.config();

const sequelizeConfig: Sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Product, ProductCart, Orders, Users, Roles, Carts],
});

export default sequelizeConfig;