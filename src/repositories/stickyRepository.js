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

