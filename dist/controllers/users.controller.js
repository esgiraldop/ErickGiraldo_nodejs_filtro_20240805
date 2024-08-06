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
exports.UserController = void 0;
const tsyringe_1 = require("tsyringe");
const users_services_1 = require("../services/users.services");
let UserController = class UserController {
    static getAllUsers(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(users_services_1.UserServices);
                const response = yield userService.getAllUsers();
                if (!response) {
                    res.status(200).json({
                        message: "No users found",
                        status: 200
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        data: response,
                        message: "Users returned succesfully"
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
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestData = req.body;
                const roleId = 2; // User is assigned a client role id by default
                const userService = tsyringe_1.container.resolve(users_services_1.UserServices);
                const response = yield userService.createUser(Object.assign(Object.assign({}, requestData), { roleId }));
                if (!response) {
                    res.status(200).json({
                        message: "No user created",
                        status: 200
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        data: response,
                        message: "Users created succesfully"
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
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(users_services_1.UserServices);
                const response = yield userService.updateUser(req.params.id, req.body);
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "User updated succesfully"
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
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productService = tsyringe_1.container.resolve(users_services_1.UserServices);
                const response = yield productService.deleteUser(req.params.id);
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "User deleted succesfully"
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
    static getOrdersByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(users_services_1.UserServices);
                const response = yield userService.getOrdersByUser(req.params.id);
                if (!response) {
                    res.status(200).json({
                        message: "No orders by user could be retrieved",
                        status: 200
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        data: response,
                        message: "Orders by user returned sucessfully"
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
};
exports.UserController = UserController;
exports.UserController = UserController = __decorate([
    (0, tsyringe_1.injectable)()
], UserController);
