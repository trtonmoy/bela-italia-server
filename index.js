const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 4000;

const chefs = require("./data/chefData.json");

app.get("/data", (req, res) => {
  res.send(chefs);
});

app.get("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedId = chefs.find((chef) => parseInt(chef.id) === id);
  res.send(selectedId);
});

app.listen(port, () => {
  console.log(`This is running on port no: ${port}`);
});
