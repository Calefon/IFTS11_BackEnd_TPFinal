import {
  createListService,
  getAllListsService,
  getListByIdService,
  updateListService,
} from "../../services/listas.service.js";

// List Controllers

export const createList = async (req, res) => {
  const { title } = req.body;

  try {
    const savedList = await createListService(title);
    res.status(201).json(savedList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLists = async (req, res) => {
  try {
    const lists = await getAllListsService();
    res.status(200).json(lists);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching lists", error: error.message });
  }
};

export const getListById = async (req, res) => {
  const { listId } = req.params;

  try {
    const list = await getListByIdService(listId);
    res.status(200).json(list);
  } catch (error) {
    if (error.message === "List not found") {
      res.status(404).json({ message: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Error fetching list", error: error.message });
    }
  }
};

export const updateList = async (req, res) => {
  const { listId } = req.params;
  const { title } = req.body;

  try {
    const updatedList = await updateListService(listId, title);
    res.status(200).json(updatedList);
  } catch (error){
    if (error.message === "List not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};
