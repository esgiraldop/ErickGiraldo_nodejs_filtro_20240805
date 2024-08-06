"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCart = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const products_model_1 = require("./products.model");
const orders_model_1 = require("./orders.model");
const carts_model_1 = require("./carts.model");
let ProductCart = class ProductCart extends sequelize_typescript_1.Model {
};
exports.ProductCart = ProductCart;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true
    }),
    __metadata("design:type", Number)
], ProductCart.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => carts_model_1.Carts),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true
    }),
    __metadata("design:type", Number)
], ProductCart.prototype, "cartId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => products_model_1.Product),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true
    }),
    __metadata("design:type", Number)
], ProductCart.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true
    }),
    __metadata("design:type", Number)
], ProductCart.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => products_model_1.Product),
    __metadata("design:type", products_model_1.Product)
], ProductCart.prototype, "products", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => orders_model_1.Orders),
    __metadata("design:type", Array)
], ProductCart.prototype, "orders", void 0);
exports.ProductCart = ProductCart = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "productCarts",
        timestamps: true
    })
], ProductCart);
