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
exports.ProductCartController = void 0;
const tsyringe_1 = require("tsyringe");
const productCarts_services_1 = require("../services/productCarts.services");
let ProductCartController = class ProductCartController {
    static getAllProductCarts(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productCartService = tsyringe_1.container.resolve(productCarts_services_1.ProductCartServices);
                const response = yield productCartService.getAllProductCarts();
                if (!response) {
                    res.status(200).json({
                        message: "No products found in the cart",
                        status: 200
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        data: response,
                        message: "Products in the cart returned succesfully"
                    });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        status: 500,
                        message: `Error in the database: ${error.message}`
                    });
                }
            }
        });
    }
    static createProductCarts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productCartService = tsyringe_1.container.resolve(productCarts_services_1.ProductCartServices);
                const response = yield productCartService.createProductCarts(req.body);
                if (!response) {
                    res.status(200).json({
                        message: "No product created in the cart",
                        status: 200
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        data: response,
                        message: "Products created succesfully in the cart"
                    });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        status: 500,
                        message: `Error in the database: ${error.message}`
                    });
                }
            }
        });
    }
    static updateProductCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productCartService = tsyringe_1.container.resolve(productCarts_services_1.ProductCartServices);
                const response = yield productCartService.updateProductCart(req.params.id, req.body);
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Product updated succesfully in the cart"
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        status: 500,
                        message: `Error in the database: ${error.message}`
                    });
                }
            }
        });
    }
    static deleteProductCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productCartService = tsyringe_1.container.resolve(productCarts_services_1.ProductCartServices);
                const response = yield productCartService.deleteProductCart(req.params.id);
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Product deleted succesfully from the cart"
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        status: 500,
                        message: `Error in the database: ${error.message}`
                    });
                }
            }
        });
    }
};
exports.ProductCartController = ProductCartController;
exports.ProductCartController = ProductCartController = __decorate([
    (0, tsyringe_1.injectable)()
], ProductCartController);
