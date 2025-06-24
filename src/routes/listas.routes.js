import { Router } from "express";
import { createList, getLists, getListById } from '../controllers/lists/listas.controller.js';

const listasRouter = Router();

// Rutas para Listas
listasRouter.get('/', getLists);
listasRouter.post('/', createList);
listasRouter.get('/:listId', getListById);

export default listasRouter; 