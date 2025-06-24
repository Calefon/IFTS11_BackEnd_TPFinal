import { Router } from "express";
import {
  createList,
  getLists,
  getListById,
  updateList,
  deleteList,
} from "../controllers/lists/listas.controller.js";

const listasRouter = Router();

// Rutas para Listas
listasRouter.get("/", getLists);
listasRouter.post("/", createList);
listasRouter.get("/:listId", getListById);
listasRouter.put("/:listId", updateList);
listasRouter.delete("/:listId", deleteList);

export default listasRouter;
