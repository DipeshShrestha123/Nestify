import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "../backend/routes/auth.route.js"; // Adjust path as necessary
import cookieParser from "cookie-parser";

dotenv.config(); // Load environment variables

const app = express();
const PORT = 8080;

app.use(cookieParser());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Failed to connect to DB", err);
        process.exit(1); // Exit process with failure code
    }
}

main();

// Start Express server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Define routes
app.get("/", (req, res) => {
    res.send("hey");
});

app.use("/auth", authRoute);
