import { getContactsController, patchContactController, postContactController, deleteContactController } from "../controllers";
import { validateAdmin, validateBody, validateToken, verifyEmail, verifyPatchAuth, verifyUserId } from "../middlewares";
import { patchContactSchema, postContactSchema } from "../schemas";
import { Router } from "express";


const contactsRouter:Router = Router()

contactsRouter.post('/:id', validateBody(postContactSchema), validateToken, verifyUserId, verifyEmail, postContactController)
contactsRouter.get('/:id', validateToken, getContactsController)
contactsRouter.patch('/:id', validateBody(patchContactSchema), validateToken, patchContactController)
contactsRouter.delete('/:id', validateToken, deleteContactController)


export default contactsRouter