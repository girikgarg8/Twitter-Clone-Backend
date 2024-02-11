import mongoose from 'mongoose';
import { MONGODB_CONNECTION_STRING } from './server-config.js';

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log('MongoDB connected');
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export default connectDB;
