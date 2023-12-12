import { createUserService, deleteUserService, readUserService, updateUserService } from "../services"
import { Request, Response } from "express"

export const postUserController = async (req:Request, res:Response) => {

    const service = await createUserService(req.body)

    return res.status(201).json(service)
}

export const getUserController = async (req:Request, res:Response) => {

    const service = await readUserService(Number(req.params.id))

    return res.status(200).json(service)
}

export const patchUserController = async (req:Request, res:Response) => {

    const service = await updateUserService(Number(req.params.id), req.body)

    return res.status(200).json(service)
}

export const deleteUserController = async (req:Request, res:Response) => {

    await deleteUserService(Number(req.params.id))

    return res.status(204).send()
}