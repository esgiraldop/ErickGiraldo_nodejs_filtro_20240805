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
exports.UserServices = void 0;
const tsyringe_1 = require("tsyringe");
const users_repository_1 = require("../repositories/users.repository");
const carts_repository_1 = require("../repositories/carts.repository");
let UserServices = class UserServices {
    constructor(userRepository, cartRepository) {
        this.userRepository = userRepository;
        this.cartRepository = cartRepository;
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getAll();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getById(id);
        });
    }
    createUser(orderData) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = yield this.userRepository.create(orderData);
            const usrId = userData === null || userData === void 0 ? void 0 : userData.dataValues.id;
            if (!userData || !usrId) {
                return null;
            }
            else {
                const cartData = yield this.cartRepository.create(usrId);
                return userData;
            }
        });
    }
    updateUser(id, orderData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.update(id, orderData);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.destroy(id);
        });
    }
    getOrdersByUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getOrdersByUser(id);
        });
    }
};
exports.UserServices = UserServices;
exports.UserServices = UserServices = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(users_repository_1.UserRepository)),
    __param(1, (0, tsyringe_1.inject)(carts_repository_1.CartRepository)),
    __metadata("design:paramtypes", [users_repository_1.UserRepository,
        carts_repository_1.CartRepository])
], UserServices);
