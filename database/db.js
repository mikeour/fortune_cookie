const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database/database.sqlite3");

db.serialize(() => {
  db.run("CREATE TABLE favorites (name TEXT, msg TEXT)");
});

db.close();
