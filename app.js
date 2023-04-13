import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import RecipeController from "./recipe/recipe-controller.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/recipes';

mongoose.connect(CONNECTION_STRING);

console.log(CONNECTION_STRING)

const app = express();
app.use(cors())
app.use(express.json());
RecipeController(app)

app.listen(process.env.PORT || 4000);