import { injectable } from "tsyringe";
import { IUser } from "../interfaces/users.interface";
import { Users } from "../models/users.model";
import { Orders } from "../models/orders.model";
import { ProductCart } from "../models/productCarts.model";
import { Product } from "../models/products.model";

@injectable()
export class UserRepository{

    async getAll():Promise<Users[]>{
        return await Users.findAll()
    }

    async getById(id:string):Promise<Users|null>{
        return await Users.findByPk(id)
    }

    async getUserByEmail(email: string): Promise<Users | null> {
        return Users.findOne({ where: { email } });
    }

    async create({email, password, roleId}:IUser):Promise<Users|null>{
        return await Users.create({email, password, roleId})
    }

    async update(id:string, {email, password, roleId}:IUser):Promise<void>{
        await Users.update({email, password, roleId},
            {where: {id}}
        )
    }

    async destroy(id:string):Promise<void>{
        await Users.destroy({where:{id}})
    }

    async getOrdersByUser(id:string):Promise<Users|null>{
        return await Users.findOne({
            where: {id},
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
    }
}
