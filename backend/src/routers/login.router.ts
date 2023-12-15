import { loginController } from "../controllers";
import { validateBody } from "../middlewares";
import { loginSchema } from "../schemas";
import { Router } from "express";

const loginRouter:Router = Router()


/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Login
 *     description: Login application
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: number
 *                 token:
 *                   type: string
 */
loginRouter.post('', validateBody(loginSchema), loginController)

export default loginRouter