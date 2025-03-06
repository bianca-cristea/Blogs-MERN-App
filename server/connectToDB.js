import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("Error connecting to the database", error.message);
  }
}
