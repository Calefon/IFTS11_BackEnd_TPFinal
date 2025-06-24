import { Router } from "express";
import cardRouter from "./cardsRouter.js"
import listasRouter from "./listas.routes.js";

const mainRouter = Router();

mainRouter.get("/", (req,res) => {
    res.send("Hola mundo")
})

//Atarlo con las rutas necesarias
mainRouter.use(cardRouter);
mainRouter.use("/api/cards/lists",listasRouter); 

export default mainRouter;