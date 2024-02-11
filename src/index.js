import express from 'express';

import connectDB from './config/database.js'

import { PORT } from './config/server-config.js';

import router from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", router);

//Testing of /tweets API is pending before the crash access was lost

app.listen(PORT, async () => {
    console.log(`Successfully started the server on port: ${PORT}`);
    connectDB();
});