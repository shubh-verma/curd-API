const express = require("express");
const app = express();
const port = 3000;

const dotenv = require("./config/config.env");
const connectDatabase = require("./config/database");

const routes = require("./routes/productRoutes");

app.use(routes);

app.use(express.json());

connectDatabase();

app.listen(port, () => {
  console.log(`Node API is listening on port ${port}`);
});
