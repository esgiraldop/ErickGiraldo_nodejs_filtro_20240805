import { inject, injectable } from "tsyringe";
import { ProductRepository } from "../repositories/products.repository";
import { Product } from "../models/products.model";
import { IProduct } from "../interfaces/products.interface";

@injectable()
export class ProductServices{
    constructor(@inject(ProductRepository) private productRepository:ProductRepository){
    }

    async getAllProducts():Promise<Product[]>{
        return await this.productRepository.getAll()
    }

    async getProductById(id:string):Promise<Product|null>{
        return await this.productRepository.getById(id)
    }

    async createProduct(productData:IProduct):Promise<Product|null>{
        return await this.productRepository.create(productData)
    }

    async updateProduct(id:string, productData:IProduct):Promise<void>{
        return await this.productRepository.update(id,productData)
    }

    async deleteProduct(id:string):Promise<void>{
        return await this.productRepository.destroy(id)
    }
}