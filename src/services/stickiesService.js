import * as stickiesRepository from "../repositories/stickiesRepository.js";

export const getAllStickies = async () => {
    try{
        const stickies = await stickiesRepository.readAllStickies();
        return stickies;
    }catch(error){
        console.error(`SERVICE ERROR - Error al intentar buscar todas las stickies: \n***\n\t${error}`);
        throw Error(`SERVICE ERROR - Error en getAllStickies: \n***\n\t${error}`);
    }
}

export const createSticky = async (titulo, contenido) => {
    try{
        const createdSticky = await stickiesRepository.createSticky(titulo, contenido);
        return createdSticky;
    }catch(error){
        console.error(`SERVICE ERROR - Error al intentar crear nueva sticky: \n***\n\t${error}`);
        throw Error(`SERVICE ERROR - Error en createSticky: \n***\n\t${error}`);
    }
}

export const deleteStickyById = async (id) => {
    try{
        const deletedSticky = await stickiesRepository.deleteStickyById(id);
        return deletedSticky;
    }catch(error){
        console.error(`SERVICE ERROR - Error al intentar borrar sticky: \n***\n\t${error}`);
        throw Error(`SERVICE ERROR - Error en deleteStickyById: \n***\n\t${error}`);
    }
}