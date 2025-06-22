
import { Listas } from './mongooseModels/listas.model.js';

//TODO: borrar este modulo

const testCrear = async (obj) => {
    try {
        console.log(`REPOSITORY  - testCrear - obj:${obj}`)
        const nuevaLista = new Listas(obj)

        await nuevaLista.save();
        console.log(`Lista creada: ${nuevaLista}\nID: ${nuevaLista._id}`)
        return nuevaLista

    } catch (error) {
        console.log("testCrear - " + error)
        throw Error("Error al intentar crear lista: - " + error)
    }
}

/* testCrear({
    titulo: "Lista 2"
}) */