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
    title: "Catan",
    players: "3–4 players",
    time: "60–120 minutes",
    difficulty: "Medium",
    description:
      "Collect and trade resources as you build roads, settlements and cities across the island of Catan.",
    image: "images/catan.jpg"
  },
  {
    id: 2,
    title: "Wingspan",
    players: "1–5 players",
    time: "40–70 minutes",
    difficulty: "Medium",
    description:
      "Attract birds to your wildlife preserves and create powerful combinations across different habitats.",
    image: "images/wingspan.jpg"
  },
  {
    id: 3,
    title: "Coffee Rush",
    players: "2–4 players",
    time: "30 minutes",
    difficulty: "Light–Medium",
    description:
      "Collect ingredients and complete customer orders while the pressure builds in a busy competitive café.",
    image: "images/coffee-rush.jpg"
  },
  {
    id: 4,
    title: "Root",
    players: "2–4 players",
    time: "60–90 minutes",
    difficulty: "High",
    description:
      "Lead a woodland faction with its own rules, abilities and strategy as each group fights for control.",
    image: "images/root.jpg"
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