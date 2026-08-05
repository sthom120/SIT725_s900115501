const mongoose = require("mongoose");
const Game = require("./models/Game");

const games = [
  {
    title: "Catan",
    players: "3–4 players",
    time: "60–120 minutes",
    difficulty: "Medium",
    description:
      "Collect and trade resources as you build roads, settlements and cities across the island of Catan.",
    image: "images/catan.png"
  },
  {
    title: "Wingspan",
    players: "1–5 players",
    time: "40–70 minutes",
    difficulty: "Medium",
    description:
      "Attract birds to your wildlife preserves and create powerful combinations across different habitats.",
    image: "images/wingspan.png"
  },
  {
    title: "Coffee Rush",
    players: "2–4 players",
    time: "30 minutes",
    difficulty: "Light–Medium",
    description:
      "Collect ingredients and complete customer orders while the pressure builds in a busy competitive café.",
    image: "images/coffee-rush.png"
  },
  {
    title: "Root",
    players: "2–4 players",
    time: "60–90 minutes",
    difficulty: "High",
    description:
      "Lead a woodland faction with its own rules, abilities and strategy as each group fights for control.",
    image: "images/root.png"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/boardGameExplorerDB"
    );

    console.log("Connected to MongoDB");

    // Remove old records so running the seed file again
    // does not create duplicate games.
    await Game.deleteMany({});

    const insertedGames = await Game.insertMany(games);

    console.log(`${insertedGames.length} games added to the database`);
  } catch (error) {
    console.error("Database seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
};

seedDatabase();