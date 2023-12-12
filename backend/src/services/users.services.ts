import { Repository } from "typeorm";
import { TUserCreation, TUserResponse, TUserUpdate } from "../interfaces";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";


export const createUserService = async (payload:TUserCreation) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User = await userRepo.create(payload)

    await userRepo.save(user)

    return {...user, password: undefined}
}

export const readUserService = async (id:number) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:TUserResponse|null = await userRepo.findOneBy({ id: id })

    return {...user, password: undefined}
}

export const updateUserService = async (id:number, payload:TUserUpdate) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User|null = await userRepo.findOneBy({ id: id })

    if(!user) {
        throw new AppError("User not found", 404)
    }

    const updateOptions = { ...payload, admin: user.admin }

    const updatedUser:User = userRepo.create({ ...user, ...updateOptions })

    await userRepo.save(updatedUser)

    return {...updatedUser, password: undefined}
}

export const deleteUserService = async (id: number) => {
    
    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User|null = await userRepo.findOneBy({ id: id })

    if(!user)
        throw new AppError("User not found", 404)

    await userRepo.delete(user.id)
}