import { getContactsController, patchContactController, postContactController, deleteContactController } from "../controllers";
import { validateBody, validateToken, verifyEmail, verifyPatchAuth, verifyUserId } from "../middlewares";
import { patchContactSchema, postContactSchema } from "../schemas";
import { Router } from "express";


const contactsRouter:Router = Router()

/**
 * @swagger
 * /users/contacts/{id}:
 *   post:
 *     tags:
 *       - Contacts
 *     description: Get user by ID
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
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the user
 *         required: true
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
 */
contactsRouter.post('/:id', validateBody(postContactSchema), validateToken, verifyUserId, verifyEmail, postContactController)

/**
 * @swagger
 * /users/contacts/{id}:
 *   get:
 *     tags:
 *       - Contacts
 *     description: Get all contacts from a user
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
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   email:
 *                     type: string
 */
contactsRouter.get('/:id', validateToken, getContactsController)

/**
 * @swagger
 * /users/contacts/{id}:
 *   patch:
 *     tags:
 *       - Contacts
 *     description: Update contact by ID
 *     requestBody:
 *       required: false
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
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the contact
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
 */
contactsRouter.patch('/:id', validateBody(patchContactSchema), validateToken, patchContactController)

/**
 * @swagger
 * /users/contacts/{id}:
 *   delete:
 *     tags:
 *       - Contacts
 *     description: Delete contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the contact
 *         required: true
 *     responses:
 *       204:
 *         description: No Content
 */
contactsRouter.delete('/:id', validateToken, deleteContactController)


export default contactsRouter