import mongoose from "mongoose";
const { Schema } = mongoose;

//Schema de tarjetas
const cardSchema = new Schema(
    {
        title:{
            type: String,
            required: true
        },
        description: String,
        tags: [String]
    }
);

//Schema para listas
const listasSchema = new Schema(
    {
        titulo:{
            type: String,
            required: true
        },
        tarjetas: [tarjetasSchema]
    }
);

export const Listas = mongoose.model('Lista', listasSchema);