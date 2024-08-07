import { inject, injectable } from "tsyringe";
import { UserRepository } from "../repositories/users.repository";
import { Users } from "../models/users.model";
import { IUser } from "../interfaces/users.interface";
import { CartRepository } from "../repositories/carts.repository";
const bcrypt = require('bcrypt');

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

    async findByEmail(email:string): Promise<Users | null> {
        return await this.userRepository.getUserByEmail(email);
    };

    async createUser(usrInput:IUser):Promise<Users|null>{
        // Checking user does not exists already
        const crrntUserData = await this.findByEmail(usrInput.email);
        if(!crrntUserData){
            // Encripting password
            const saltRounds = 10
            const hashedPassword = await bcrypt.hash(usrInput.password, saltRounds);
            usrInput.password = hashedPassword;
            usrInput.roleId = 2; // By default, user is registered as client
            // Saving the user
            const userData = await this.userRepository.create(usrInput)
            const usrId = userData?.dataValues.id
            if(!userData || !usrId){
                return null
            }else{
                // Creating a cart associated to the user
                const cartData = await this.cartRepository.create(usrId);
                return userData
            }
        }
        console.log("User already exists")
        return null
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