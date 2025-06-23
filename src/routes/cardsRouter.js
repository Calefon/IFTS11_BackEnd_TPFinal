import { Router } from "express";
import {createCardController, deleteCardController,getAllCardsByListIdController} from "../controllers/cardsController.js"

const cardRouter = Router();

cardRouter.post('/lists/:listId/cards', createCardController);
cardRouter.delete('/lists/:listId/cards/:cardId', deleteCardController);
cardRouter.get('/lists/:listId/cards',getAllCardsByListIdController)

export default cardRouter;