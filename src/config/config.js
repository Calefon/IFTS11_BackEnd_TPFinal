import dotenv from 'dotenv'

dotenv.config();

export const configMongoDB = {
    user: process.env.USER_DB_MONGO_DB,
    password: process.env.PASSWORD_DB_MONGO_DB,
    cluster: process.env.CLUSTER_NAME_MONGO_DB,
    database: process.env.DB_NAME_MONGO_DB
}
