import { inject, injectable } from "tsyringe";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from 'dotenv';
import { UserServices } from "./users.services";
import { Users } from "../models";
import { IUser } from "../interfaces";
import { CartServices } from "./carts.services";
const bcrypt = require('bcrypt');

dotenv.config();

export const JWT_KEY: Secret = process.env.JWT_SECRET_KEY as string;

@injectable()
export class AuthServices {
  constructor(@inject(UserServices) private userServices: UserServices,
              @inject(CartServices) private cartServices: CartServices
              ) {};

  async login(email: string, password: string): Promise<string | null> {

    const user = await this.userServices.findByEmail(email);
    if(!user){
      console.log("User does not exist");
      return null
    }
    if (!user || !await bcrypt.compare(password, user.password)
    ) {
        return null;
    }
    const token = jwt.sign({ userId: user.id }, JWT_KEY, { expiresIn: '1h' });
    return token
  };

  async createUser(usrInput:IUser):Promise<Users|null>{
    return await this.userServices.createUser(usrInput)
}
};