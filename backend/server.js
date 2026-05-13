import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// console.log("ENV:", process.env.MONGO_URI);

const start = async () => {
  try {
    console.log("Connecting DB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });

  } catch (error) {
    console.log("ERROR:");
    console.log(error);
  }
};

start();