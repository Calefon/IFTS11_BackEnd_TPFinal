import { connectToMongoDBMongoose } from "../db/mongoDBConection.js";

const repositoriesInit = async () => {
    //Iniciar conexión a MongoDB
    connectToMongoDBMongoose();
}

export default repositoriesInit;