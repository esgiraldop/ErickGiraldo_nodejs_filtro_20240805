import { injectable } from "tsyringe";
import { ProductCart } from "../models/productCarts.model";
import { IProductCart } from "../interfaces/productCarts.interface";

@injectable()
export class ProductCartRepository{

    async getAll():Promise<ProductCart[]>{
        return await ProductCart.findAll()
    }

    async getById(id:string):Promise<ProductCart|null>{
        return await ProductCart.findByPk(id)
    }

    async create({cartId, productId, quantity}:IProductCart):Promise<ProductCart|null>{
        return await ProductCart.create({cartId, productId, quantity})
    }

    async update(id:string, {cartId, productId, quantity}:IProductCart):Promise<void>{
        await ProductCart.update({cartId, productId, quantity},
            {where: {id}}
        )
    }

    async destroy(id:string):Promise<void>{
        await ProductCart.destroy({where:{id}})
    }
}
