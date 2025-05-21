import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "../backend/routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import ListItem from "./models/ListItem.js";
dotenv.config(); // Load environment variables

const app = express();
const PORT = 8080;
app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173", // ✅ Allow only your frontend origin
        credentials: true, // ✅ Allow cookies & auth headers
        methods: ["GET", "POST", "PUT", "DELETE"], // ✅ Allowed methods
        allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allow necessary headers
    })
);

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

app.get("/listdata", async (req, res) => {
    try {
        const listings = await ListItem.find(); // ✅ Use "ListItem" instead of "Listing"
        res.json(listings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching listings", error });
    }
});
app.get("/listdata/:id", async (req, res) => {
    try {
        const listing = await ListItem.findById(req.params.id); 
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }
        res.json(listing);
    } catch (error) {
        res.status(500).json({ message: "Error fetching listing", error });
    }
});
// Send Data to MongoDB

// const seedDatabase = async () => {
//     try {
//         await ListItem.deleteMany();  // Clear previous data
//         await ListItem.insertMany(listdata);
//         console.log("Database Seeded Successfully!");
//         mongoose.connection.close();
//     } catch (err) {
//         console.error(err);
//     }
// };

// seedDatabase();