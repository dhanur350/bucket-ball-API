const { createBallCollection } = require("../models/models");

async function createBallEntry (req,res) {
  const data = req.body;
  const createBall = await createBallCollection(data);
  console.log(createBall);
  res.json(createBall);
  res.end();
}

async function getAllBallsEntry() {

}

module.exports = {
  createBallEntry,
  getAllBallsEntry
}

