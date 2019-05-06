require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const { getRandomMessage, sendMail } = require("./helpers.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/api/random", (req, res) => {
  getRandomMessage().then(({ data: results }) => {
    const { advice } = results.slip;
    res.send(advice);
  });
});

app.post("/email", (req, res) => {
  const msg = req.body.data;
  sendMail("michaeljroeslein@gmail.com", msg);
});

app.listen(3001, () => console.log("Connected on 3001!"));
