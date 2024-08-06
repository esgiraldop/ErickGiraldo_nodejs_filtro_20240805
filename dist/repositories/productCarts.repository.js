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
exports.ProductCartRepository = void 0;
const tsyringe_1 = require("tsyringe");
const productCarts_model_1 = require("../models/productCarts.model");
let ProductCartRepository = class ProductCartRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield productCarts_model_1.ProductCart.findAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield productCarts_model_1.ProductCart.findByPk(id);
        });
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ cartId, productId, quantity }) {
            return yield productCarts_model_1.ProductCart.create({ cartId, productId, quantity });
        });
    }
    update(id_1, _a) {
        return __awaiter(this, arguments, void 0, function* (id, { cartId, productId, quantity }) {
            yield productCarts_model_1.ProductCart.update({ cartId, productId, quantity }, { where: { id } });
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield productCarts_model_1.ProductCart.destroy({ where: { id } });
        });
    }
};
exports.ProductCartRepository = ProductCartRepository;
exports.ProductCartRepository = ProductCartRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductCartRepository);
