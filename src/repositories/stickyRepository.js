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

