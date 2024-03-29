import dotenv from 'dotenv';
dotenv.config(); // by calling dotenv's config function, it will read .env file and use the keys inside as environment variables

import express from 'express'; // this kind of import doesn't work by default, this is a module type. Enable it in package.json
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';

import { dbconnect } from './config/database.config.js';
dbconnect();

// create the express app by calling default express
const app = express();

// since we are using req.body and we want to send body data to server as json, we need to tell express app to use json for body
app.use(express.json());

// the localhost:3000 is our react app, so we can't have our express app on the same port
app.use( 
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
    })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);



const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});