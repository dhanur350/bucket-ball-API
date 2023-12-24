const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", () => {});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
