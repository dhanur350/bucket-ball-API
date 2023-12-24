const express = require("express");
const bodyparser = require('body-parser')
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
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

app.get("/", () => {});

app.post('/bucketList',(req,res)=> {
  const data = req.body;
  console.log(data);
  res.json(data);
  res.end();
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
