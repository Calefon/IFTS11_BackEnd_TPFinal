import { Sticky } from "./mongooseModels/stickys.model.js";

export const createStickyRepository = async (newSticky) => {
    try {
        const nuevoSticky = new Sticky(newSticky);

        await nuevoSticky.save();
        console.info(`Sticky creado: ${nuevoSticky}\nID: ${nuevoSticky._id}`);
        return nuevoSticky

    } catch (error) {
        console.error(`REPOSITORY ERROR - createStickyRepository: \n***\n\t:${error}`)
        throw Error(`REPOSITORY ERROR - Error al intentar crear sticky: \n***\n\t:${error}`)
    }
}

export const readAllStickiesRepository = async () => {
    try{
        const stickies = await Sticky.find();
        return stickies
    } catch (error) {
        console.error(`REPOSITORY ERROR - Error al intentar buscar todas las stickies: \n***\n\t${error}`)
        throw Error(`REPOSITORY ERROR - Error en readAllStickiesRepository: \n***\n\t${error}`) 
    }
}

export const deleteStickyByIdRepository = async (id) => {

    try {
        const stickyEliminado = await Sticky.findByIdAndDelete(id)

        if(!stickyEliminado){
            console.info('Elemento no encontrado - deleteSticky')
        }else{
            console.info(`Se elimino el elemento: \n${JSON.stringify(stickyEliminado)}`)
            return stickyEliminado
        }

    } catch (error) {
        console.error(`REPOSITORY ERROR - deleteStickyRepository: \n***\n\t${error}`)
        throw Error(`REPOSITORY ERROR - Error al intentar eliminar sticky: \n***\n\t${error}`)
    }
}

