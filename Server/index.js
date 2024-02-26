import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect('mongodb+srv://arshishakeel07:Atlas%40123@cluster0.y0zyak5.mongodb.net/recipes')
        
app.listen(3001, () => console.log("Server started"));