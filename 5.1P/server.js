const express = require("express");
const path = require("path");

const booksRoutes = require("./routes/books.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/books", booksRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});