import mongoose from 'mongoose';
import { MONGODB_CONNECTION_STRING } from './server-config.js';

const connectDB = async () => {
    await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log('MongoDB connected');
}

export default connectDB;
