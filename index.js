import mongoose from "mongoose";
import express from "express";
import { PORT, MONGO_URL } from "./config.js";


const app = express();
app.use(express.json());

app.listen(PORT, async () => {
    connect();
    console.log(`Server running ${PORT}`);
  });

const connect = () => {
    try {
      mongoose.connect(MONGO_URL, {}).then(() => {
        console.log("connect to DB");
      });
    } catch (error) {
      console.error("could not connnect to DB");
      process.exit(1);
    }
};