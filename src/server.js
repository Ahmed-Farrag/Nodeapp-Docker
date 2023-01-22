const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("<h1>hello addy how are</h1>"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app is up and running on : ${PORT}`));
