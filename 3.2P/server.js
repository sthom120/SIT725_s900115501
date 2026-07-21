const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Serve the HTML, CSS, JavaScript and images inside public.
app.use(express.static(__dirname + "/public"));

// Allow Express to understand JSON and form data.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});