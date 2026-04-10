// Activity.js

const mongoose = require("mongoose");

const activitySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    activity: {
      type: String,
      required: [true, "Please add an activity name"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      enum: ["Transport", "Food", "Energy", "Waste"],
    },
    co2Value: {
      type: Number,
      required: [true, "Please add a CO2 value"],
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Activity", activitySchema);