import mongoose from "mongoose";
const { Schema, model } = mongoose;

const cardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  cardList: { type: Schema.Types.ObjectId, ref: 'CardList' }
});

const Card = model('Card', cardSchema);

export default Card;