const mongoose = require("mongoose");

const resultsSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  points: { type: Number, required: true },
  scoreboard_id: [],
});

module.exports = mongoose.model("Results", resultsSchema);
