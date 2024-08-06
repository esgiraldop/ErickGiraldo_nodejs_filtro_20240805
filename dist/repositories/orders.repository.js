"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const tsyringe_1 = require("tsyringe");
const orders_model_1 = require("../models/orders.model");
const productCarts_model_1 = require("../models/productCarts.model");
const products_model_1 = require("../models/products.model");
let OrderRepository = class OrderRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield orders_model_1.Orders.findAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield orders_model_1.Orders.findByPk(id);
        });
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ userId, productCartId, total }) {
            return yield orders_model_1.Orders.create({ userId, productCartId, total });
        });
    }
    update(id_1, _a) {
        return __awaiter(this, arguments, void 0, function* (id, { userId, productCartId, total }) {
            yield orders_model_1.Orders.update({ userId, productCartId, total }, { where: { id } });
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield orders_model_1.Orders.destroy({ where: { id } });
        });
    }
    getProductsByOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield orders_model_1.Orders.findOne({
                where: { id },
                attributes: ["id", "userId", "productCartId", "total"],
                include: [
                    {
                        model: productCarts_model_1.ProductCart,
                        as: 'productCarts',
                        required: true,
                        attributes: ["id"],
                        include: [
                            {
                                model: products_model_1.Product,
                                as: 'products',
                                required: true,
                                attributes: ["id", "name", "price", "description", "stock"],
                            }
                        ]
                    }
                ]
            });
        });
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, tsyringe_1.injectable)()
], OrderRepository);
