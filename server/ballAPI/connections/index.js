const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require("mongodb");
const { database } = require("../../config");

const client = new MongoClient(database);

async function configDatabase() {
  const connect = await client.connect();
  const dbInstance = connect.db(process.env.BUCKET_DB);
  const collection = dbInstance.collection(process.env.BALL_COLLECTION);
  return collection;
}

module.exports = {
  configDatabase
}