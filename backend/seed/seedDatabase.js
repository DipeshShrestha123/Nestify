import mongoose from "mongoose";
import dotenv from "dotenv";
import ListItem from "../models/ListItem.js";
import listdata from "./listdata.json"; // Your seed data

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await ListItem.deleteMany();
    await ListItem.insertMany(listdata);
    console.log("Database Seeded Successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seedDatabase();
