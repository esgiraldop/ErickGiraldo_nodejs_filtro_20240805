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
exports.ProductController = void 0;
const tsyringe_1 = require("tsyringe");
const products_services_1 = require("../services/products.services");
let ProductController = class ProductController {
    static getAllProducts(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productService = tsyringe_1.container.resolve(products_services_1.ProductServices);
                const response = yield productService.getAllProducts();
                if (!response) {
                    res.status(200).json({
                        message: "No products found",
                        status: 200
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        data: response,
                        message: "Products returned succesfully"
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
    static createProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productService = tsyringe_1.container.resolve(products_services_1.ProductServices);
                const response = yield productService.createProduct(req.body);
                if (!response) {
                    res.status(200).json({
                        message: "No product created",
                        status: 200
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        data: response,
                        message: "Products created succesfully"
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
    static updateProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productService = tsyringe_1.container.resolve(products_services_1.ProductServices);
                const response = yield productService.updateProduct(req.params.id, req.body);
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Product updated succesfully"
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
    static deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productService = tsyringe_1.container.resolve(products_services_1.ProductServices);
                const response = yield productService.deleteProduct(req.params.id);
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Product deleted succesfully"
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
exports.ProductController = ProductController;
exports.ProductController = ProductController = __decorate([
    (0, tsyringe_1.injectable)()
], ProductController);
