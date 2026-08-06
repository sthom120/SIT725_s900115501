const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
    },
    players: {
      type: String,
      required: true,
      trim: true
    },
    time: {
      type: String,
      required: true,
      trim: true
    },
    difficulty: {
      type: String,
      required: true,
      enum: ["Light", "Light–Medium", "Medium", "Medium–High", "High"]
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500
    },
    image: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Game", gameSchema);