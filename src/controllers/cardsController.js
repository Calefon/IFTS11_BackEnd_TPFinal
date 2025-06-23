import {createCardService,deleteCardService, getAllCardsByListIdService} from "../services/cardsService.js"
import generarNuevaCard from "../utils/generarNuevaCard.js";

const createCardController = async (req, res) => {
    const { listId } = req.params;
    const { title, description } = req.body;
 
    if (!title) {
        return res.status(400).json({ message: 'Card title is required' });
    }

    const card = generarNuevaCard(title, description, listId);
    console.log(card)
    try {
        const newCard = await createCardService(card);
        res.status(201).json(newCard);
        } catch (error) {
            res.status(500).json({ message: 'Error creating card', error });
        }
};

const deleteCardController = async (req, res) => {
    const { listId, cardId } = req.params;

    try{
        const cardDeleted = await deleteCardService(cardId);
        res.status(200).json( cardDeleted );  
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

const getAllCardsByListIdController = async (req, res) => {
    const { listId } = req.params;
 
    if (!listId) {
        return res.status(400).json({ message: 'List id is required' });
    }

    try {
        const cards = await getAllCardsByListIdService(listId);
        res.status(201).json(cards);
        } catch (error) {
            res.status(500).json({ message: 'Error getting cards', error });
        }
};

export {createCardController, deleteCardController,getAllCardsByListIdController};