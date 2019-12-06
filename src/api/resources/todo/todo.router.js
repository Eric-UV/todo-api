import express from 'express';
import todoController from './todo.controller';

export const todoRouter = express.Router();
todoRouter.route('/').get(todoController.get);
todoRouter.route('/').post(todoController.post);
todoRouter.route('/').delete(todoController.delete);