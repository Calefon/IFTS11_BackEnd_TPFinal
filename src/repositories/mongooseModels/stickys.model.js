import mongoose from "mongoose";

//Schema para stickys
const stickysSchema = mongoose.Schema(
    {
        titulo:{
            type: String,
            required: true
        },
        contenido: String
    }
)

//Por default guarda el dato en la collection con nombre segun el plural del nombre del modelo en minuscula (Sticky -> stickies)
export const Sticky = mongoose.model('Sticky', stickysSchema);