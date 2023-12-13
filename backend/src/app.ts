import { contactsRouter, loginRouter, usersRouter } from './routers';
import { handleError } from './middlewares';
import 'express-async-errors';
import 'reflect-metadata';
import express from 'express';


const app = express();
app.use(express.json());

app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/users/contacts', contactsRouter)

app.use(handleError)

export default app;
