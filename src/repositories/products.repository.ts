import { injectable } from "tsyringe";
import { Product } from "../models/products.model";
import { IProduct } from "../interfaces/products.interface";

@injectable()
export class ProductRepository{

    async getAll():Promise<Product[]>{
        return await Product.findAll()
    }

    async getById(id:number):Promise<Product|null>{
        return await Product.findByPk(id)
    }

    async create({name, price, description, stock}:IProduct):Promise<Product|null>{
        return await Product.create({name, price, description, stock})
    }

    async update(id:string, {name, price, description, stock}:IProduct):Promise<void>{
        await Product.update({name, price, description, stock},
            {where: {id}}
        )
    }

    async updateStock(id:number, newStock:number):Promise<void>{
        await Product.update({stock:newStock},
            {where: {id}}
        )
    }

    async destroy(id:string):Promise<void>{
        await Product.destroy({where:{id}})
    }
}
