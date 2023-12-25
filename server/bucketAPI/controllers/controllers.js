const { createBucketCollection } = require("../models/models");

async function createBucketEntry (req,res) {
  const data = req.body;
  const createBucket = await createBucketCollection();
  console.log(data);
  res.json(data);
  res.end();
}

async function getAllBallsEntry() {

}

module.exports = {
  createBucketEntry,
  getAllBallsEntry
}

