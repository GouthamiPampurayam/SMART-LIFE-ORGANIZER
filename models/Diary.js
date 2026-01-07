const mongoose = require("mongoose");

const DiarySchema = new mongoose.Schema({
  user: String,
  text: String,
  time: String
});

module.exports = mongoose.model("Diary", DiarySchema);
