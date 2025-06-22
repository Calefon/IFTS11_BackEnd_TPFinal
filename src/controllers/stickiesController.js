import * as stickiesService from '../services/stickiesService.js'

export const getAllStickies = async (req, res) => {
    try{
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send(await stickiesService.getAllStickies());
    }catch(error){
        console.error(`CONTROLLER ERROR - Error al intentar buscar todas las stickies: \n***\n\t${error}`);
        res.status(500).send({ code: 500, message: "Error al intentar obtener todas las stickies"});
    }
}

export const postCreateSticky = async (req, res) => {
    try{
        const newSticky = req.body;

        res.setHeader('Content-Type', 'application/json');
        res.status(201);
        res.send(await stickiesService.createSticky(newSticky));
    }catch(error){
        console.error(`CONTROLLER ERROR - Error al intentar crear sticky: \n***\n\t${error}`);
        res.status(500).send({ code: 500, message: "Error al intentar crear sticky"});
    }
}