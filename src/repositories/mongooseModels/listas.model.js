import mongoose from "mongoose";
const { Schema } = mongoose;

//Schema de listas de tarjetas
const cardListSchema = new Schema(
    {
        title:{
            type: String,
            required: true
        },
        
        
    }
);

export const CardListModel = mongoose.model('CardList', cardListSchema);