const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Finally Working");
});

app.listen(port, () => {
  console.log(`Node API is listening on port ${port}`);
});
