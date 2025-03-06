import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import connectToDB from "./connectToDB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectToDB();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
