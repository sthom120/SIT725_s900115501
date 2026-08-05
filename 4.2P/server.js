const express = require("express");
const mongoose = require("mongoose");
const Game = require("./models/Game");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the local MongoDB database
mongoose
  .connect("mongodb://127.0.0.1:27017/boardGameExplorerDB")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

// GET all board games from MongoDB
app.get("/api/games", async (req, res) => {
  try {
    const games = await Game.find({});

    res.status(200).json({
      statusCode: 200,
      data: games,
      message: "Games retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      data: [],
      message: "Unable to retrieve games"
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});