const { Schema, model } = require("mongoose");

const ballSchema = new Schema({
  ballName: Schema.Types.String,
  volumnInInches: Schema.Types.Number,
});

module.exports = model("createBall", ballSchema);
