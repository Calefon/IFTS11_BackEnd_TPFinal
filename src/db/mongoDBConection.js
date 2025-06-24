import { configMongoDB } from "../config/config.js";
import mongoose from "mongoose";

const defaultURI = `mongodb+srv://zoevivas64:Kc4wZv9gpTSjYtTa@cluster0.9kqfxnf.mongodb.net/`;

const URI = configMongoDB.useCustomURI ? configMongoDB.customMongoDBURI : defaultURI;

export const connectToMongoDBMongoose = async () => {
    console.log(configMongoDB.useCustomURI)
    console.log(URI)
    try {
        await mongoose.connect(URI);
        console.log(`MongoDB connection succesfull.\nCluster: ${configMongoDB.cluster}`)
    } catch (error) {
        console.log(`Error trying to connect to MongoDB database. Cluster: ${configMongoDB.cluster}`)
        console.error(error);
        process.exit(1);
    }

}
