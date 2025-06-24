import { CardListModel } from "../repositories/mongooseModels/listas.model.js";

//

export const createListService = async (title) => {
  if (!title) {
    throw new Error("Title is required");
  }

  const newList = new CardListModel({
    title,
    cards: [],
  });
  const savedList = await newList.save();
  return savedList;
};

export const getAllListsService = async () => {
  const lists = await CardListModel.find();
  return lists;
};

export const getListByIdService = async (listId) => {
  const list = await CardListModel.findById(listId);
  if (!list) {
    throw new Error("List not found");
  }
  return list;
};

export const updateListService = async (listId, title) => {
  if (!title) throw new Error("Title is required");

  const updatedList = await CardListModel.findByIdAndUpdate(
    listId,
    { title },
    { new: true }
  );

  if (!updatedList) throw new Error("List not found");
  return updatedList;
};

export const deleteListService = async (listId) => {
    const deletedList = await CardListModel.findByIdAndDelete(listId);
    if (!deletedList) throw new Error("List not found");
    return deletedList;
};
