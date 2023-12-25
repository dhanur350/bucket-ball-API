const express = require("express");
const bodyparser = require('body-parser')
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const { createBucketEntry, getAllBallsEntry } = require("./ballAPI/controllers/controllers");
dotenv.config();
const port = process.env.PORT;

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/all-balls-entry", getAllBallsEntry);

app.post('/bucket-list', createBucketEntry)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
