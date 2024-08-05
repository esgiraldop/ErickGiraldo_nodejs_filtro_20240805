import { inject, injectable } from "tsyringe";
import { ProductCartRepository } from "../repositories/productCarts.repository";
import { ProductCart } from "../models/productCarts.model";
import { IProductCart } from "../interfaces/productCarts.interface";

@injectable()
export class ProductCartServices{
    constructor(@inject(ProductCartRepository) private productCartRepository:ProductCartRepository){
    }

    async getAllProducts():Promise<ProductCart[]>{
        return await this.productCartRepository.getAll()
    }

    async getProductById(id:string):Promise<ProductCart|null>{
        return await this.productCartRepository.getById(id)
    }

    async createProduct(productData:IProductCart):Promise<ProductCart|null>{
        return await this.productCartRepository.create(productData)
    }

    async updateProduct(id:string, productData:IProductCart):Promise<void>{
        return await this.productCartRepository.update(id,productData)
    }

    async deleteProduct(id:string):Promise<void>{
        return await this.productCartRepository.destroy(id)
    }
}