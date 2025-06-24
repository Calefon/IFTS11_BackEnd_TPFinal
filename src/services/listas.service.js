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

/**
 * Actualiza el título de una lista específica por su ID.
 * @param {string} listId - El ID de la lista que se quiere actualizar.
 * @param {string} title - El nuevo título para la lista.
 * @returns {Object} - La lista actualizada.
 * @throws {Error} - Si no se provee un título o la lista no existe, lanza un error.
 */
export const updateListService = async (listId, title) => {
  // Verifica que se haya proporcionado un título; si no, lanza un error.
  if (!title) throw new Error("Title is required");

  // Actualiza la lista por su ID, seteando el nuevo título.
  // La opción { new: true } retorna el documento actualizado.
  const updatedList = await CardListModel.findByIdAndUpdate(
    listId,
    { title },
    { new: true }
  );

  // Si no se encontró la lista para actualizar, lanza un error.
  if (!updatedList) throw new Error("List not found");

  // Retorna la lista actualizada.
  return updatedList;
};

/**
 * Elimina físicamente una lista de la base de datos usando su ID.
 * @param {string} listId - El ID de la lista que se desea eliminar.
 * @returns {Object} - La lista eliminada.
 * @throws {Error} - Si la lista no existe, lanza un error.
 */
export const deleteListService = async (listId) => {
  // Busca la lista por su ID y la elimina físicamente de la base de datos.
  const deletedList = await CardListModel.findByIdAndDelete(listId);

  // Si no se encontró la lista, lanza un error indicando que no existe.
  if (!deletedList) throw new Error("List not found");

  // Retorna la lista eliminada.
  return deletedList;
};

// /**
//  * Marca una lista como eliminada lógicamente, sin borrarla físicamente de la base de datos.
//  * @param {string} listId - El ID de la lista que se desea "eliminar".
//  * @returns {Object} - La lista actualizada con el campo isDeleted en true.
//  * @throws {Error} - Si la lista no existe, lanza un error.
//  */
// export const deleteListLogicalService = async (listId) => {
// //Busca la lista por su ID y actualiza el campo 'isDeleted' a true.
// //La opción { new: true } devuelve la lista actualizada.
//   const list = await CardListModel.findByIdAndUpdate(
//     listId,
//     { isDeleted: true },
//     { new: true }
//   );

//   // Si no se encuentra la lista, lanza un error indicando que no existe.
//   if (!list) throw new Error("List not found");

//   // Retorna la lista actualizada.
//   return list;
// };
