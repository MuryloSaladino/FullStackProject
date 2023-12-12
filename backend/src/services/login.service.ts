import { Repository } from "typeorm";
import { TLogin } from "../interfaces";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import 'dotenv/config';

export const loginService = async (payload:TLogin) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User|null = await userRepo.findOneBy({ email: payload.email })

    if(!user)
        throw new AppError("Invalid credentials", 401)

    const compare:boolean = compareSync(payload.password, user.password!)

    if(!compare) {
        throw new AppError("Invalid credentials", 401)
    }
    
    const token:string = sign(
        {
            admin: user.admin
        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: String(process.env.EXPIRES_IN),
            subject: String(user.id)
        }
    )

    return token
}