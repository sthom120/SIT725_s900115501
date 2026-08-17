const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const booksRoutes = require("./routes/books.routes");

const app = express();
const PORT = 3000;

const mongoURI = "mongodb://localhost:27017/sit725_books";

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/books", booksRoutes);

const startServer = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

startServer();