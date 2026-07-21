const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Allow Express to serve files from the public folder.
app.use(express.static(__dirname + "/public"));

// Allow Express to read JSON and form data.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Board game data returned by the API.
const games = [
  {
    id: 1,
    title: "Azul",
    players: "2–4 players",
    time: "30–45 minutes",
    difficulty: "Medium",
    description:
      "Draft colourful tiles and arrange them carefully to create the most valuable wall design.",
    image: "images/azul.jpg"
  },
  {
    id: 2,
    title: "Harmonies",
    players: "1–4 players",
    time: "30–45 minutes",
    difficulty: "Light–Medium",
    description:
      "Build a landscape, create animal habitats and score points through thoughtful placement.",
    image: "images/harmonies.jpg"
  },
  {
    id: 3,
    title: "Camel Up",
    players: "3–8 players",
    time: "30–45 minutes",
    difficulty: "Light",
    description:
      "Bet on a chaotic camel race where the lead can change at any moment.",
    image: "images/camel-up.jpg"
  }
];

// GET endpoint that returns all games.
app.get("/api/games", (req, res) => {
  res.json({
    statusCode: 200,
    data: games
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});