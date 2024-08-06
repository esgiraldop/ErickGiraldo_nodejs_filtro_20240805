import { injectable } from "tsyringe";
import { ICart } from "../interfaces/carts.interface";
import { Carts } from "../models/carts.model";

@injectable()
export class CartRepository{

    async create(userId:number):Promise<Carts|null>{
        return await Carts.create({userId})
    }

    async update(id:string, {userId}:ICart):Promise<void>{
        await Carts.update({userId},
            {where: {id}}
        )
    }
}
