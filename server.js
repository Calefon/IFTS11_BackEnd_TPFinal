import express from "express";
import morgan from "morgan";
import mainRouter from "./src/routes/mainRouter.js";

const server = express();

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 8080;

server.use(express.json())
server.use(express.text())
server.use(morgan('combined'));
server.use(mainRouter);

server.listen(PORT,HOSTNAME,() => {
    console.log(`Servidor corriendo en http://${HOSTNAME}:${PORT}`);
})