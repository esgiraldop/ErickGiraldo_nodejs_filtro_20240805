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
exports.Carts = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_model_1 = require("./users.model");
const productCarts_model_1 = require("./productCarts.model");
let Carts = class Carts extends sequelize_typescript_1.Model {
};
exports.Carts = Carts;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Carts.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.Users),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Carts.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_model_1.Users),
    __metadata("design:type", users_model_1.Users)
], Carts.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => productCarts_model_1.ProductCart),
    __metadata("design:type", productCarts_model_1.ProductCart)
], Carts.prototype, "productCarts", void 0);
exports.Carts = Carts = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "carts",
        timestamps: true
    })
], Carts);
