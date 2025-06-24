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
listasRouter.put("/:listId", updateList); // Actualiza una lista existente por su ID (modifica título, etc.)
listasRouter.delete("/:listId", deleteList); // Elimina físicamente una lista de la base de datos por su ID
// listasRouter.patch("/:listId/logic-delete", deleteListLogical); // Realiza un borrado lógico: marca la lista como eliminada sin borrarla físicamente

export default listasRouter;
