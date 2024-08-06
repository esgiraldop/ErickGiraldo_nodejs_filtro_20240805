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
exports.UserRepository = void 0;
const tsyringe_1 = require("tsyringe");
let UserRepository = class UserRepository {
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password, roleId }) {
            return yield Users.create({ email, password, roleId });
        });
    }
    update(id_1, _a) {
        return __awaiter(this, arguments, void 0, function* (id, { email, password, roleId }) {
            yield Users.update({ email, password, roleId }, { where: { id } });
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Users.destroy({ where: { id } });
        });
    }
    getOrdersByUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Users.findOne({
                where: { id },
                attributes: ["id", "email", "password", "roleId"],
                include: [
                    {
                        model: Orders,
                        as: 'orders',
                        required: true,
                        attributes: ["id", "userId", "total"],
                        include: [{
                                model: ProductCart,
                                as: 'productCarts',
                                required: true,
                                attributes: ["id"],
                                include: [{
                                        model: Product,
                                        as: 'products',
                                        required: true,
                                        attributes: ["id", "name", "price", "description"],
                                    }]
                            }]
                    }
                ]
            });
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, tsyringe_1.injectable)()
], UserRepository);
