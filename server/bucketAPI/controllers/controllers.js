const { createBucketCollection, getAllBucketList } = require("../models/models");

async function createBucketEntry(req, res) {
  const data = req.body;
  const createBucket = await createBucketCollection(data);
  console.log(data);
  res.json(createBucket);
  res.end();
}

async function getAllBucketsEntry(req, res) {
  const getBuckets = await getAllBucketList();
  res.json(getBuckets);
  res.end();
}

module.exports = {
  createBucketEntry,
  getAllBucketsEntry,
};
