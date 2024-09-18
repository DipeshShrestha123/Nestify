const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dot = require("dotenv");
dot.config();  // Load environment variables
const authroute = require("../backend/routes/auth.route.js");
const cookieParser = require("cookie-parser");

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
        process.exit(1);  // Exit process with failure code
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

app.use("/auth",authroute);
