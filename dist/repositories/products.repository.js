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
exports.ProductRepository = void 0;
const tsyringe_1 = require("tsyringe");
const products_model_1 = require("../models/products.model");
let ProductRepository = class ProductRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield products_model_1.Product.findAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield products_model_1.Product.findByPk(id);
        });
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, price, description, stock }) {
            return yield products_model_1.Product.create({ name, price, description, stock });
        });
    }
    update(id_1, _a) {
        return __awaiter(this, arguments, void 0, function* (id, { name, price, description, stock }) {
            yield products_model_1.Product.update({ name, price, description, stock }, { where: { id } });
        });
    }
    updateStock(id, newStock) {
        return __awaiter(this, void 0, void 0, function* () {
            yield products_model_1.Product.update({ stock: newStock }, { where: { id } });
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield products_model_1.Product.destroy({ where: { id } });
        });
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductRepository);
