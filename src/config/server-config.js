import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;

export const MONGODB_CONNECTION_STRING= process.env.MONGODB_CONNECTION_STRING;
