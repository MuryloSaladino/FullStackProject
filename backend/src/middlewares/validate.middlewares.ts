import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import { verify } from "jsonwebtoken"
import { ZodTypeAny } from "zod";
import 'dotenv/config';
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";

export const validateBody = (schema:ZodTypeAny) => (req:Request, res:Response, next:NextFunction) => {

    const validated = schema.parse(req.body)

    req.body = validated

    return next()
}

export const validateToken = async (req:Request, res:Response, next:NextFunction) => {

    const auth:string|undefined = req.headers.authorization

    if(!auth) {
        throw new AppError("Missing bearer token", 401)
    }

    const [_bearer, token] = auth.split(" ")

    verify(
        token,
        String(process.env.SECRET_KEY),
        (err:any, decoded:any) => {
            if(err) {
                throw new AppError(err.message, 401)
            }
            res.locals.userId = Number(decoded.sub)
            res.locals.admin = decoded.admin
        }
    )

    const userRepo:Repository<User> = AppDataSource.getRepository(User)
    const user:User|null = await userRepo.findOneBy({ id: res.locals.userId })

    res.locals.user = user

    return next()
}

export const validateAdmin = async (req:Request, res:Response, next:NextFunction) => {

    if(!res.locals.admin) {
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}