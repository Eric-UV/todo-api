import express from 'express';
import { todoRouter } from './resources/todo';

export const restRouter = express.Router();
restRouter.use('/todos', todoRouter);