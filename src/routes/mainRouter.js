import { Router } from "express";
import cardRouter from "./cardsRouter.js"

const mainRouter = Router();

mainRouter.get("/", (req,res) => {
    res.send("Hola mundo")
})

//Atarlo con las rutas necesarias
mainRouter.use(cardRouter);

export default mainRouter;