import {createCardRepository, deleteCardRepository,getAllCardsByListIdRepository} from "../repositories/cardsRepository.js"

const createCardService = async (cardData) => {
  try {
    const newCard = await createCardRepository(cardData);
    return newCard;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCardService = async (cardData) =>{
  try {
    const deletedCard = await deleteCardRepository(cardData);
    return deletedCard;
  } catch (error) {
    throw new Error(error);
  }   
}

const getAllCardsByListIdService = async (cardsData) =>{
  try {
    const cards = await getAllCardsByListIdRepository(cardsData);
    return cards;
  } catch (error) {
    throw new Error(error);
  }   
}

export { createCardService,deleteCardService, getAllCardsByListIdService };