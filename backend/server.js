import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
const start = async () => {
  const connectDB = await mongoose.connect("mongodb+srv://dimplegautam09_db_user:KTcFXHGH8ngp4y3l@linkastra.yaajzjt.mongodb.net/?appName=Linkastra"
  )

  app.listen(3000, () => {
    console.log("Server is running on port 3000")
  });
};
start();