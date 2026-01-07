const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  user: String,
  sessions: Number,
  garden: Number
});

module.exports = mongoose.model("Stats", StatsSchema);
