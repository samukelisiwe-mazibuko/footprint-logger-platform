// backend/controllers/activityController.js

const Activity = require("../models/Activity");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user._id });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addActivity = async (req, res) => {
  const { activity, category, co2Value, date } = req.body;

  try {
    const newActivity = await Activity.create({
      user: req.user._id,
      activity,
      category,
      co2Value,
      date,
    });

    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);

    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    await activity.deleteOne();

    res.json({ message: "Activity removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getActivities,
  addActivity,
  deleteActivity,
};