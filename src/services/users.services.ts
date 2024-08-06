import { inject, injectable } from "tsyringe";
import { UserRepository } from "../repositories/users.repository";
import { Users } from "../models/users.model";
import { IUser } from "../interfaces/users.interface";
import { CartRepository } from "../repositories/carts.repository";

@injectable()
export class UserServices{
    constructor(
        @inject(UserRepository) private userRepository:UserRepository,
        @inject(CartRepository) private cartRepository:CartRepository
    ){
    }

    async getAllUsers():Promise<Users[]>{
        return await this.userRepository.getAll()
    }

    async getUserById(id:string):Promise<Users|null>{
        return await this.userRepository.getById(id)
    }

    async createUser(orderData:IUser):Promise<Users|null>{
        const userData = await this.userRepository.create(orderData)
        const usrId = userData?.dataValues.id
        if(!userData || !usrId){
            return null
        }else{
            const cartData = await this.cartRepository.create(usrId);
            return userData
        }
    }

    async updateUser(id:string, orderData:IUser):Promise<void>{
        return await this.userRepository.update(id,orderData)
    }

    async deleteUser(id:string):Promise<void>{
        return await this.userRepository.destroy(id)
    }

    async getOrdersByUser(id:string):Promise<Users|null>{
        return await this.userRepository.getOrdersByUser(id)
    }
}