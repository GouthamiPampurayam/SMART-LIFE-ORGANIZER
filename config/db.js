const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/smartlife");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB not connected – running without DB");
  }
};

module.exports = connectDB;
