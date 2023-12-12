import { getContactsController, patchContactController, postContactController, deleteContactController } from "../controllers";
import { validateAdmin, validateBody, validateToken, verifyEmail, verifyPatchAuth, verifyUserId } from "../middlewares";
import { patchContactSchema, postContactSchema } from "../schemas";
import { Router } from "express";


const contactsRouter:Router = Router()

contactsRouter.post('/:id', validateBody(postContactSchema), verifyUserId, verifyEmail, postContactController)
contactsRouter.get('/:id', validateToken, getContactsController)
contactsRouter.patch('/:id', validateBody(patchContactSchema), verifyUserId, validateToken, verifyPatchAuth, patchContactController)
contactsRouter.delete('/:id', verifyUserId, validateToken, validateAdmin, deleteContactController)


export default contactsRouter