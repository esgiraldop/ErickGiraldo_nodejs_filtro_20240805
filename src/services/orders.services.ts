import { inject, injectable } from "tsyringe";
import { OrderRepository } from "../repositories/orders.repository";
import { Orders } from "../models/orders.model";
import { IOrder } from "../interfaces/orders.interface";

@injectable()
export class OrderServices{
    constructor(@inject(OrderRepository) private orderRepository:OrderRepository){
    }

    async getAllProducts():Promise<Orders[]>{
        return await this.orderRepository.getAll()
    }

    async getProductById(id:string):Promise<Orders|null>{
        return await this.orderRepository.getById(id)
    }

    async createProduct(orderData:IOrder):Promise<Orders|null>{
        return await this.orderRepository.create(orderData)
    }

    async updateProduct(id:string, orderData:IOrder):Promise<void>{
        return await this.orderRepository.update(id,orderData)
    }

    async deleteProduct(id:string):Promise<void>{
        return await this.orderRepository.destroy(id)
    }

    async getProductsByOrder(id:string):Promise<Orders|null>{
        return await this.orderRepository.getProductsByOrder(id)
    }
}