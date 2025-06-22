import express from "express";
import morgan from "morgan";
import mainRouter from "./src/routes/mainRouter.js";
import repositoriesInit from "./src/repositories/repositoriesInit.js";
import stickiesRouter from "./src/routes/stickiesRouter.js";
import cors from 'cors'

//TODO: BORRAR testRepository.js

//Inicializacion de repository
repositoriesInit();

const server = express();

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 8080;

//Cors setup para correrlo en localhost
const corsOptions = {
  origin: '*',  
  methods: 'GET,POST,PUT,DELETE',  
  allowedHeaders: 'Content-Type,Authorization',  
  credentials: true,
};

server.use(cors(corsOptions));

//Middleware para parsear json requests
server.use(express.json())

//Middleware para parsear txt requests
server.use(express.text())

//Middleware morgan para logging de requests
server.use(morgan('combined'));

//Router stickies
server.use('/stickies',stickiesRouter);

//Router principal
server.use(mainRouter);

server.listen(PORT,HOSTNAME,() => {
    console.log(`Servidor corriendo en http://${HOSTNAME}:${PORT}`);
})

