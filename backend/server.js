import express from "express";
import dotenv from  "dotenv";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

//middleware -> "api/auth/${authRoutes의 경로가 추가: signup, login, logout}"
app.use("/api/auth", authRoutes);

app.listen(4000, () => {
  connectToMongoDB();
  console.log(`server Running on ${PORT}` );
});