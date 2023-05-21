const express = require("express");
const chef = require("./data/chef.json");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server is running properly.");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
