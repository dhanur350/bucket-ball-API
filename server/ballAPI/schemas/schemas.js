const { Schema, model } = require("mongoose");

const bucketSchema = new Schema({
  bucketName: Schema.Types.String,
  volumnInInches: Schema.Types.Number,
});

module.exports = model("createBucket", bucketSchema);
