const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  persons: Number,
  bus: Number,
  food: Number,
  days: Number,
  stay: Number,
  nights: Number,
  intercity: Number,
  other: Number,
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Trip", TripSchema);
