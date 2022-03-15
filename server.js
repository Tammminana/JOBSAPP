// console.log("server is running ...");
// import cors from 'cors';
import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';

//db and authenticate the User
import connectDB from "./db/connect.js";

// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

// Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// app.use(cors());
if (process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.get("/", (req,res) => {
    // throw new Error('');
    res.json({msg : "Welcome"});
})

app.get("/api/v1", (req,res) => {
    // throw new Error('');
    res.json({msg : "NEW Welcome"});
})


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`)
        }) 
    } catch (error) {
        console.log(error);
    }
}

start();