import Card from "./mongooseModels/card.model.js";

const createCardRepository = async (cardData) => {
    try {
    const newCard = await Card.create(cardData);
    return newCard; 
  } catch (error) {
    console.error("Error al crear la card:", error);
    throw new Error("Error al crear la card");
  }
};

const deleteCardRepository = async (cardId) => {
  try {
    const deletedCard = await Card.findByIdAndDelete(cardId);
    return deletedCard;
  } catch (error) {
    console.error("Error al eliminar la card:", error.message);
    throw new Error("Error al eliminar la card");
  }  
};

const getAllCardsByListIdRepository = async (listaId) => {
  try {
    const cards = await Card.find({ cardList: listaId });
    return cards;
  } catch (error) {
    console.error("Error al encontrar las cards:", error.message);
    throw new Error("Error al encontrar las cards");
  }  
};

export {createCardRepository,deleteCardRepository,getAllCardsByListIdRepository};