const express = require("express");
const path = require("path");
const app = express();

const { getRandomMessage } = require("./helpers.js");

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/api/random", (req, res) => {
  getRandomMessage().then(({ data: results }) => {
    const { advice } = results.slip;
    res.send(advice);
  });
});

app.listen(3001, () => console.log("Connected on 3001!"));
