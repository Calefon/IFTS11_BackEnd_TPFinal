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
        res.status(200);
        res.send(await stickiesService.createSticky(newSticky));
    }catch(error){
        console.error(`CONTROLLER ERROR - Error al intentar crear sticky: \n***\n\t${error}`);
        res.status(500).send({ code: 500, message: "Error al intentar crear sticky"});
    }
}

export const deleteSticky = async (req, res) => {
    try{
        const stickyId = req.params.id;

        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send(await stickiesService.deleteStickyById(stickyId));
    }catch(error){
        console.error(`CONTROLLER ERROR - Error al intentar borrar sticky: \n***\n\t${error}`);
        res.status(500).send({ code: 500, message: "Error al intentar borrar sticky"});
    }
}