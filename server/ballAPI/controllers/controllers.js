const { createBallCollection } = require("../models/models");

async function createBallEntry (req,res) {
  const data = req.body;
  const createBucket = await createBallCollection();
  console.log(data);
  res.json(data);
  res.end();
}

async function getAllBallsEntry() {

}

module.exports = {
  createBallEntry,
  getAllBallsEntry
}

