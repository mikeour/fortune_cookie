const sqlite3 = require("sqlite3");
const path = require("path");
const db = new sqlite3.Database(path.join(__dirname, "./database.sqlite3"));

module.exports.getFavoriteMessages = callback => {
  db.all("SELECT * FROM favorites", (err, res) => {
    callback(res);
  });
};

module.exports.saveFavoriteMessage = (name, msg) => {
  db.run("INSERT INTO favorites (name, msg) VALUES (?, ?)", name, msg);
};
