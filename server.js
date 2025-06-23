import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("The MERN API has been hit");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
