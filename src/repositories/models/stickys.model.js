import mongoose from "mongoose";

//Test de schema usado para 
const stickysSchema = mongoose.Schema(
    {
        titulo:{
            type: String,
            required: true
        },
        contenido: String
    }
)

export const Sticky = mongoose.model('Sticky', stickysSchema);