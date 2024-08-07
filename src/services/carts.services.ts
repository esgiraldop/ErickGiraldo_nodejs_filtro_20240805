import { inject, injectable } from "tsyringe";
import { CartRepository } from "../repositories/carts.repository";
import { ICart } from "../interfaces";
import { Carts } from "../models";
const bcrypt = require('bcrypt');

@injectable()
export class CartServices{
    constructor(
        @inject(CartRepository) private cartRepository:CartRepository
    ){
    }

    // async getAllCarts():Promise<Users[]>{
    //     return await this.cartRepository.getAll()
    // }

    async createCart(id:number):Promise<Carts|null>{
        return await this.cartRepository.create(id);
    }

    async updateUser(id:string, orderData:ICart):Promise<void>{
        return await this.cartRepository.update(id,orderData)
    }

    // async deleteUser(id:string):Promise<void>{
    //     return await this.cartRepository.destroy(id)
    // }

    // async getOrdersByUser(id:string):Promise<Carts|null>{
    //     return await this.cartRepository.getOrdersByUser(id)
    // }
}