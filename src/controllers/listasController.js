import {
  createListService,
  getAllListsService,
  getListByIdService,
  updateListService,
  deleteListService,
} from "../services/listasService.js";

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



/**
 * Controlador para actualizar el título de una lista.
 * Extrae el ID de la lista desde los parámetros de la URL y el nuevo título desde el cuerpo de la petición.
 * Llama al servicio para actualizar la lista y envía la respuesta correspondiente.
 * Maneja errores específicos para lista no encontrada o errores de validación.
 */
export const updateList = async (req, res) => {
  const { listId } = req.params; // Obtiene el ID de la lista desde los parámetros URL
  const { title } = req.body; // Obtiene el nuevo título desde el cuerpo de la petición

  try {
    // Intenta actualizar la lista usando el servicio correspondiente
    const updatedList = await updateListService(listId, title);

    // Responde con estado 200 y la lista actualizada en formato JSON
    res.status(200).json(updatedList);
  } catch (error) {
    // Si la lista no fue encontrada, responde con error 404
    if (error.message === "List not found") {
      res.status(404).json({ message: error.message });
    } else {
      // Para otros errores (ej. título inválido), responde con error 400
      res.status(400).json({ message: error.message });
    }
  }
};


/**
 * Controlador para eliminar una lista por su ID.
 * Obtiene el ID de la lista desde los parámetros de la URL.
 * Llama al servicio para eliminar la lista y responde con un mensaje de éxito.
 * Maneja errores específicos para lista no encontrada y errores del servidor.
 */
export const deleteList = async (req, res) => {
  const { listId } = req.params; // Obtiene el ID de la lista desde los parámetros de la URL

  try {
    // Intenta eliminar la lista usando el servicio correspondiente
    const deletedList = await deleteListService(listId);

    // Responde con estado 200 y un mensaje de éxito junto con la lista eliminada
    res.status(200).json({ message: "List deleted successfully", deletedList });
  } catch (error) {
    // Si la lista no fue encontrada, responde con error 404
    if (error.message === "List not found") {
      res
        .status(404)
        .json({ message: error.message });
    } else {
      // Para otros errores, responde con error 500 y el mensaje de error
      res
        .status(500)
        .json({ message: "Error deleting list", error: error.message });
    }
  }
};


// /**
//  * Controlador para eliminar lógicamente una lista (marcar como isDeleted = true).
//  * Recibe el ID de la lista desde los parámetros de la URL.
//  * Llama al servicio para actualizar la propiedad isDeleted.
//  * Devuelve la lista actualizada o un error si no existe.
//  */
// export const deleteListLogical = async (req, res) => {
//   const { listId } = req.params; // Obtiene el ID de la lista desde la URL

//   try {
//     // Llama al servicio que marca la lista como eliminada lógicamente
//     const updatedList = await deleteListLogicalService(listId);
//     // Responde con el objeto actualizado y un mensaje de éxito
//     res.status(200).json({ message: "List logically deleted", updatedList });
//   } catch (error) {
//     // Si no encuentra la lista, responde con 404
//     if (error.message === "List not found") {
//       res.status(404).json({ message: error.message });
//     } else {
//       // Para otros errores, responde con 500 y detalle del error
//       res.status(500).json({ message: "Error logically deleting list", error: error.message });
//     }
//   }
// };

