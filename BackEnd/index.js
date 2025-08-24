import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://localhost:27017/Kedai_kopi");

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected.."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// jalankan server
app.listen(5000, () => console.log("Server up and running"));
