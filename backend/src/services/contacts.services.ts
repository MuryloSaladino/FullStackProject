import { Repository } from "typeorm";
import { Contact, User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { TContactCreation, TContactUpdate } from "../interfaces";


export const createContactService = async (userId:number, payload:TContactCreation) => {

    const contactRepo:Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User|null = await userRepo.findOneBy({ id: userId })
    if(!user)
        throw new AppError('user not found', 404)
    
    const contact:Contact = await contactRepo.create({...payload, user: user})

    await contactRepo.save(contact)

    return contact
}

export const readContactsService = async (id:number) => {

    const contactRepo:Repository<Contact> = AppDataSource.getRepository(Contact)

    const contacts:Contact[] = await contactRepo.find({ where: { user: {id: id}}})

    return contacts
}

export const updateContactService = async (id:number, payload:TContactUpdate) => {

    const contactRepo:Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact:Contact|null = await contactRepo.findOneBy({ id: id })

    if(!contact) 
        throw new AppError("contact not found", 404)

    const updateOptions = { ...payload }

    const updatedContact:Contact = contactRepo.create({ ...contact, ...updateOptions })

    await contactRepo.save(updatedContact)

    return updatedContact
}

export const deleteContactService = async (id:number) => {
    
    const contactRepo:Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact:Contact|null = await contactRepo.findOneBy({ id: id })

    if(!contact) 
        throw new AppError("contact not found", 404)

    await contactRepo.delete(contact.id)
}