import { deleteUserController, getUserController, patchUserController, postUserController } from "../controllers";
import { validateAdmin, validateBody, validateToken, verifyEmail, verifyPatchAuth, verifyUserId } from "../middlewares";
import { patchUserSchema, postUserSchema } from "../schemas";
import { Router } from "express";


const usersRouter:Router = Router()

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     description: Create new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                 updated_at:
 *                   type: string
 */
usersRouter.post('', validateBody(postUserSchema), verifyEmail, postUserController)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the user
 *         required: true
 *     responses:
 *       200:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                 updated_at:
 *                   type: string
 */
usersRouter.get('/:id', verifyUserId, validateToken, getUserController)

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     tags:
 *       - Users
 *     description: Update user by ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the user
 *         required: true
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                 updated_at:
 *                   type: string
 */
usersRouter.patch('/:id', validateBody(patchUserSchema), verifyUserId, validateToken, verifyPatchAuth, patchUserController)

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the user
 *         required: true
 *     responses:
 *       204:
 *         description: No content
 */
usersRouter.delete('/:id', verifyUserId, validateToken, validateAdmin, deleteUserController)


export default usersRouter