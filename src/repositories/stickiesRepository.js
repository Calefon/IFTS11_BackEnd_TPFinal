import { Sticky } from "./mongooseModels/stickys.model.js";

//Este modulo asume que ya existe una conexión a mongoDB inicializada con mongoose

export const createSticky = async (titulo, contenido = "") => {
    try {
        const nuevoSticky = new Sticky({titulo, contenido});

        await nuevoSticky.save();
        console.info(`Sticky creado: ${nuevoSticky}\nID: ${nuevoSticky._id}`);
        return nuevoSticky

    } catch (error) {
        console.error(`REPOSITORY ERROR - createSticky: \n***\n\t:${error}`)
        throw Error(`REPOSITORY ERROR - Error al intentar crear sticky: \n***\n\t:${error}`)
    }
}

export const readAllStickies = async () => {
    try{
        const stickies = await Sticky.find();
        return stickies
    } catch (error) {
        console.error(`REPOSITORY ERROR - Error al intentar buscar todas las stickies: \n***\n\t${error}`)
        throw Error(`REPOSITORY ERROR - Error en readAllStickies: \n***\n\t${error}`) 
    }
}

export const deleteStickyById = async (id) => {

    try {
        const stickyEliminado = await Sticky.findByIdAndDelete(id)

        if(!stickyEliminado){
            console.info('Elemento no encontrado - deleteSticky')
        }else{
            console.info(`Se elimino el elemento: \n${JSON.stringify(stickyEliminado)}`)
            return stickyEliminado
        }

    } catch (error) {
        console.error(`REPOSITORY ERROR - deleteSticky: \n***\n\t${error}`)
        throw Error(`REPOSITORY ERROR - Error al intentar eliminar sticky: \n***\n\t${error}`)
    }
}

