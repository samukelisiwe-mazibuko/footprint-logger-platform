// backend/controllers/insightController.js

const Activity = require("../models/Activity");
const generateTips = require("../utils/generateTips");

const getInsights = async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user._id });

    const categoryTotals = {};

    activities.forEach((activity) => {
      if (!categoryTotals[activity.category]) {
        categoryTotals[activity.category] = 0;
      }

      categoryTotals[activity.category] += activity.co2Value;
    });

    let highestCategory = "";
    let highestValue = 0;

    for (const category in categoryTotals) {
      if (categoryTotals[category] > highestValue) {
        highestValue = categoryTotals[category];
        highestCategory = category;
      }
    }

    const tips = generateTips(highestCategory);

    res.json({
      highestEmissionCategory: highestCategory,
      totalByCategory: categoryTotals,
      tips,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInsights,
};