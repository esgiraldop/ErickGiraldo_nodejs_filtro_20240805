import { injectable } from "tsyringe";
import { IOrder } from "../interfaces/orders.interface";
import { Orders } from "../models/orders.model";
import { ProductCart } from "../models/productCarts.model";
import { Product } from "../models/products.model";

@injectable()
export class OrderRepository{

    async getAll():Promise<Orders[]>{
        return await Orders.findAll()
    }

    async getById(id:string):Promise<Orders|null>{
        return await Orders.findByPk(id)
    }

    async create({userId, productCartId, total}:IOrder):Promise<Orders|null>{
        return await Orders.create({userId, productCartId, total})
    }

    async update(id:string, {userId, productCartId, total}:IOrder):Promise<void>{
        await Orders.update({userId, productCartId, total},
            {where: {id}}
        )
    }

    async destroy(id:string):Promise<void>{
        await Orders.destroy({where:{id}})
    }

    async getProductsByOrder(id:string):Promise<Orders|null>{
        return await Orders.findOne({
            where: {id},
            attributes: ["id", "userId", "productCartId", "total"],
            include: [
                {
                    model: ProductCart,
                    as: 'productCarts',
                    required: true,
                    attributes: ["id"],
                    include: [
                        {
                            model: Product,
                            as: 'products',
                            required: true,
                            attributes: ["id", "name", "price", "description", "stock"],
                        }
                    ]
                }
            ]
        });
    }
}
