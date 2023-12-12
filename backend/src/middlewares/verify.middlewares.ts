import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";


export const verifyEmail = async (req:Request, res:Response, next:NextFunction) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const foundUser:User|null = await userRepo.findOneBy({ email: req.body.email })

    if(!foundUser)
        return next()
    
    throw new AppError("Email already exists", 409)
}

export const verifyUserId = async (req:Request, res:Response, next:NextFunction) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const foundUser:User|null = await userRepo.findOneBy({ id: Number(req.params.id) })

    if(foundUser) 
        return next()
    
    throw new AppError("User not found", 404)
}

export const verifyPatchAuth = async (req:Request, res:Response, next:NextFunction) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const foundUser:User|null = await userRepo.findOneBy({ id: Number(req.params.id) })

    if(foundUser?.email != res.locals.user.email && !res.locals.admin) 
        throw new AppError("Insufficient permission", 403)

    return next()
}
