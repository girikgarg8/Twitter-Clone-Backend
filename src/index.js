import express from 'express';

import connectDB from './config/database.js'

import { PORT } from './config/server-config.js';

const app = express();

app.listen(PORT, async () => {
    console.log(`Successfully started the server on port: ${PORT}`);
    connectDB();
});