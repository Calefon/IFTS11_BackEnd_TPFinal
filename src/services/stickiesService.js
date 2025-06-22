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
        console.error(`SERVICE ERROR - Error al intentar buscar todas las stickies: \n***\n\t${error}`);
        throw Error(`SERVICE ERROR - Error en getAllStickies: \n***\n\t${error}`);
    }
}