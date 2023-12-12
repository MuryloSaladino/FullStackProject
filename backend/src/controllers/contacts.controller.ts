import { createContactService, readContactsService, updateContactService, deleteContactService } from "../services"
import { Request, Response } from "express"

export const postContactController = async (req:Request, res:Response) => {

    const service = await createContactService(Number(req.params.id), req.body)

    return res.status(201).json(service)
}

export const getContactsController = async (req:Request, res:Response) => {

    const service = await readContactsService(Number(req.params.id))

    return res.status(200).json(service)
}

export const patchContactController = async (req:Request, res:Response) => {

    const service = await updateContactService(Number(req.params.id), req.body)

    return res.status(200).json(service)
}

export const deleteContactController = async (req:Request, res:Response) => {

    await deleteContactService(Number(req.params.id))

    return res.status(204).send()
}