const { database } = require("../../config/index.js");
const { MongoClient, ObjectId } = require("mongodb");
const { configDatabase } = require("../connections/index.js");
const Model = require("../schemas/schemas.js");
const client = new MongoClient(database);

// function getAllBucketList() {}

async function createBallCollection(body) {
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
  // getAllBucketList,
  createBallCollection,
};
