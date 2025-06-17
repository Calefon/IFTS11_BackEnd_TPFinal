import { Router } from "express";

const mainRouter = Router();

mainRouter.get("/", (req,res) => {
    res.send("Hola mundo")
})

//Atarlo con las rutas necesarias

export default mainRouter;