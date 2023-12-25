const { database } = require("../../config/index.js");
const { MongoClient, ObjectId } = require("mongodb");
const { configDatabase } = require("../connections/index.js");
const Model = require("../schemas/schemas.js");
const client = new MongoClient(database);

async function getAllBucketList() {
  const connection = await configDatabase();
  const data = await connection.find({}).toArray();
  return data;
}

async function createBucketCollection(body) {
  const connection = await configDatabase();
  const data = new Model({
    ...body,
  });
  console.log(data);
  // return setData;
  const sendData = await connection.insertOne(data);
  if (sendData.acknowledged) {
    return {
      dbMessage: "Data inserted successfully",
    };
  } else {
    return {
      errorMessage: "Data isn't inserted",
    };
  }
}

module.exports = {
  getAllBucketList,
  createBucketCollection,
};
