import {createCardService,deleteCardService, getAllCardsByListIdService} from "../services/cardsService.js"
import generarNuevaCard from "../utils/generarNuevaCard.js";
import { CardListModel } from '../repositories/mongooseModels/listas.model.js';
import Card from '../repositories/mongooseModels/card.model.js';


const createCardController = async (req, res) => {
    const { listId } = req.params;
    const { title, description } = req.body;
 
    if (!title) {
        return res.status(400).json({ message: 'Card title is required' });
    }

    try{
        const list = await CardListModel.findById(listId);
        if (!list) {
            return res.status(404).json({ message: 'List not found' });
        }
    }catch(error){
        return res.status(500).json({ message: error.message });
    }

    const card = generarNuevaCard(title, description, listId);

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
        const list = await CardListModel.findById(listId);

        if (!list) {
            return res.status(404).json({ message: 'List not found' });
        }

        
        const card = await Card.findOne({ _id: cardId, cardList: listId });

        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }
    } catch(error){
        res.status(500).json({ message: error.message });
    }

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
    
    try{
        const list = await CardListModel.findById(listId);
        if (!list) {
            return res.status(404).json({ message: 'List not found' });
        }
    }catch(error){
        return res.status(500).json({ message: error.message });
    }

    try {
        const cards = await getAllCardsByListIdService(listId);
        res.status(201).json(cards);
        } catch (error) {
            res.status(500).json({ message: 'Error getting cards', error });
        }
};

export {createCardController, deleteCardController,getAllCardsByListIdController};