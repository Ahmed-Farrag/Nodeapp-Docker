const express = require("express");
const   mongoose  = require("mongoose");

const app = express();

const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = 'mongo'
const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URL)
  .then(() => console.log("connect to db..."))
  .catch((err) => console.log("faild to db", err));

app.get("/", (req, res) => res.send("<h1>hello addy how are hi</h1>"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app is up and running on : ${PORT}`));
