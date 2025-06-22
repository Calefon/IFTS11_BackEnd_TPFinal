import { Sticky } from "./mongooseModels/stickys.model.js";

export const createStickyRepository = async (newSticky) => {
    try {
        const nuevoSticky = new Sticky(newSticky)

        await nuevoSticky.save();
        console.log(`Sticky creado: ${nuevoSticky}\nID: ${nuevoSticky._id}`)
        return nuevoSticky

    } catch (error) {
        console.log("createStickyRepository - " + error)
        throw Error("Error al intentar crear sticky: - " + error)
    }
}

export const readAllStickiesRepository = async () => {
    try{
        const stickies = await Sticky.find();
        return stickies
    } catch (error) {
        console.log("Error al intentar buscar todas las stickies - " + error)
        throw Error("Error en readAllStickiesRepository - " + error) 
    }
}

export const deleteStickyRepository = async (id) => {

    try {
        const stickyEliminado = await Sticky.findByIdAndDelete(id)

        if(!stickyEliminado){
            console.log('Elemento no encontrado - deleteSticky')
        }else{
            console.log(`Se elimino el elemento: \n${JSON.stringify(stickyEliminado)}`)
            return stickyEliminado
        }

    } catch (error) {
        console.log("deleteStickyRepository - " + error)
        throw Error("Error al intentar eliminar sticky: - " + error)
    }
}

