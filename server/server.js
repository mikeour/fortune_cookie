require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const { getRandomMessage, sendMail } = require("./helpers.js");
const {
  getFavoriteMessages,
  saveFavoriteMessage
} = require("../database/helpers.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/api/random", (req, res) => {
  getRandomMessage().then(({ data: results }) => {
    const { advice } = results.slip;
    res.send(advice);
  });
});

app.get("/faves", (req, res) => {
  getFavoriteMessages(results => {
    res.send(results);
  });
});

app.post("/save", (req, res) => {
  const { name, msg } = req.body;
  saveFavoriteMessage(name, msg);
});

app.post("/email", (req, res) => {
  const { email, msg } = req.body;
  sendMail(email, msg);
});

app.listen(3001, () => console.log("Connected on 3001!"));
