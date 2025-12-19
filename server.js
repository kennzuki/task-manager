import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import taskRouter from "./routes/taskRouter.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(errorHandler);

app.use("/api/tasks", taskRouter);
app.listen(8000, () => console.log(`Server is up on port
8000`));