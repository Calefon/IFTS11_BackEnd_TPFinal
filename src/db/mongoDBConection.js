import { configMongoDB } from "../config/config.js";
import mongoose from "mongoose";

const defaultURI1 = `mongodb+srv://zoevivas64:Kc4wZv9gpTSjYtTa@cluster0.9kqfxnf.mongodb.net/`;
// const defaultURI = `mongodb+srv://kevmpr:AlNWvBRWkyy3UrHd@mi-cluster-kevin.zxo5ujl.mongodb.net/kanban?retryWrites=true&w=majority&appName=mi-cluster-kevin`;

const URI = configMongoDB.useCustomURI
  ? configMongoDB.customMongoDBURI
  : defaultURI;

export const connectToMongoDBMongoose = async () => {
  console.log(configMongoDB.useCustomURI);
  console.log(URI);
  try {
    await mongoose.connect(URI);
    console.log(
      `MongoDB connection succesfull.\nCluster: ${configMongoDB.cluster}`
    );
  } catch (error) {
    console.log(
      `Error trying to connect to MongoDB database. Cluster: ${configMongoDB.cluster}`
    );
    console.error(error);
    process.exit(1);
  }
};
