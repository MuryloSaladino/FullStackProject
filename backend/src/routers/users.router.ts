import { deleteUserController, getUserController, patchUserController, postUserController } from "../controllers";
import { validateAdmin, validateBody, validateToken, verifyEmail, verifyPatchAuth, verifyUserId } from "../middlewares";
import { patchUserSchema, postUserSchema } from "../schemas";
import { Router } from "express";


const usersRouter:Router = Router()

usersRouter.post('', validateBody(postUserSchema), verifyEmail, postUserController)
usersRouter.get('/:id', verifyUserId, validateToken, getUserController)
usersRouter.patch('/:id', validateBody(patchUserSchema), verifyUserId, validateToken, verifyPatchAuth, patchUserController)
usersRouter.delete('/:id', verifyUserId, validateToken, validateAdmin, deleteUserController)


export default usersRouter