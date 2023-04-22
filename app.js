import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import session from "express-session"
import recipeController from "./recipe/recipe-controller.js";
import userController from "./user/user-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/recipes';

mongoose.connect(CONNECTION_STRING);

const app = express();

// app.use(cors)

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }))


app.use(express.json());

recipeController(app)
userController(app);

app.listen(process.env.PORT || 4000);