import { readAllStickiesRepository } from "../repositories/stickiesRepository.js"


export const getAllStickiesService = async () => {
    try{
        const stickies = await readAllStickiesRepository();
        return stickies;
    }catch(error){
        console.error(`SERVICE ERROR - Error al intentar buscar todas las stickies: \n***\n\t${error}`)
        throw Error(`SERVICE ERROR - Error en getAllStickiesService: \n***\n\t${error}`)
    }
}