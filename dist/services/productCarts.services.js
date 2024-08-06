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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ProductCartServices = void 0;
const tsyringe_1 = require("tsyringe");
const productCarts_repository_1 = require("../repositories/productCarts.repository");
const carts_repository_1 = require("../repositories/carts.repository");
const products_repository_1 = require("../repositories/products.repository");
let ProductCartServices = class ProductCartServices {
    constructor(productCartRepository, cartRepository, productRepository) {
        this.productCartRepository = productCartRepository;
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }
    getAllProductCarts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productCartRepository.getAll();
        });
    }
    getProductCartById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productCartRepository.getById(id);
        });
    }
    createProductCarts(_a) {
        return __awaiter(this, arguments, void 0, function* ({ cartId, productId, quantity }) {
            // Validating if the cart actually exists
            const cartData = yield this.cartRepository.getById(cartId);
            if (!cartData) {
                console.log(`The cart with id ${cartId} does not exists`);
                return null;
            }
            // Validating if the product exists
            const productData = yield this.productRepository.getById(productId);
            if (!productData) {
                console.log(`The product with id ${productId} does not exists`);
                return null;
            }
            // Quantity must be positive
            if (quantity < 1) {
                console.log("The quantity of the purchase must be positive");
                return null;
            }
            // Validating if there is still stock of the product
            if (productData.dataValues.stock < quantity) {
                console.log(`There is not enough stock of product with id: ${productId}`);
                return null;
            }
            // If the product could be created in the car, then the stock needs to be updated
            yield this.productRepository.updateStock(productId, productData.dataValues.stock - quantity);
            // Finally the products are added to the cart
            const productCartData = yield this.productCartRepository.create({ cartId, productId, quantity });
            if (!productCartData) {
                return null;
            }
            return productCartData;
        });
    }
    updateProductCart(id, productData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productCartRepository.update(id, productData);
        });
    }
    deleteProductCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Getting the data of the product cart
            const productCartInfo = yield this.productCartRepository.getById(id);
            const productId = productCartInfo === null || productCartInfo === void 0 ? void 0 : productCartInfo.dataValues.productId;
            const quantity = productCartInfo === null || productCartInfo === void 0 ? void 0 : productCartInfo.dataValues.quantity;
            const productData = yield this.productRepository.getById(productId);
            const stock = productData === null || productData === void 0 ? void 0 : productData.dataValues.stock;
            // Updating the stock of the product
            yield this.productRepository.updateStock(productId, stock + quantity);
            // Deleting the product in the corresponding cart
            return yield this.productCartRepository.destroy(id);
        });
    }
};
exports.ProductCartServices = ProductCartServices;
exports.ProductCartServices = ProductCartServices = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(productCarts_repository_1.ProductCartRepository)),
    __param(1, (0, tsyringe_1.inject)(carts_repository_1.CartRepository)),
    __param(2, (0, tsyringe_1.inject)(products_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [productCarts_repository_1.ProductCartRepository,
        carts_repository_1.CartRepository,
        products_repository_1.ProductRepository])
], ProductCartServices);
