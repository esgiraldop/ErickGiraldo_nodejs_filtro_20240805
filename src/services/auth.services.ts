import { inject, injectable } from "tsyringe";
import { UserRepository } from "../repositories/users.repository";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const JWT_KEY: Secret = process.env.JWT_SECRET_KEY as string;
console.log()

@injectable()
export class AuthServices {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {};

  async login(email: string, password: string): Promise<string | null> {

    const user = await this.userRepository.getUserByEmail(email);
    if (!user || !(user.password === password)) {
        console.log("RETURN NULL")
        return null;
    }
    const token = jwt.sign({ userId: user.id }, JWT_KEY, { expiresIn: '1h' });
    return token
  };
};