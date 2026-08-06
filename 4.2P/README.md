# SIT725 Task 4.2P – Board Game Explorer Database

This project extends the Board Game Explorer created for Task 3.2P by adding a MongoDB database and moving game data retrieval to the Express server.

## Features

- Express web server
- MongoDB database connection using Mongoose
- REST API endpoint for retrieving board games
- Dynamically generated game cards
- Separate Mongoose model
- Database seed script containing sample board games

## Game Data Fields

Each game document contains:

- title
- players
- time
- difficulty
- description
- image

## Installation

MongoDB must be installed and running locally.

Install the project dependencies:

```bash
npm install