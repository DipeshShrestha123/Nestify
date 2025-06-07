import mongoose from "mongoose";
import dotenv from "dotenv";
// Connect to MongoDB
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");
  } catch (err) {
    console.error("Failed to connect to DB", err);
    process.exit(1); // Exit process with failure code
  }
}
