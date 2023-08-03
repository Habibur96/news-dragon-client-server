const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to our news dragon client");
});

app.get("/categories", (req, res) => {
  console.log(categories);
  res.send(categories);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
