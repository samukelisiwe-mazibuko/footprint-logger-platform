// backend/utils/generateTips.js

const generateTips = (highestCategory) => {
  switch (highestCategory) {
    case "Transport":
      return [
        "Use public transport instead of driving alone.",
        "Walk or cycle for short distances.",
        "Consider carpooling with friends or coworkers.",
      ];

    case "Food":
      return [
        "Reduce meat consumption during the week.",
        "Choose more plant-based meals.",
        "Avoid food waste by planning meals ahead.",
      ];

    case "Energy":
      return [
        "Switch off appliances when not in use.",
        "Use energy-efficient light bulbs.",
        "Reduce electricity use during peak hours.",
      ];

    case "Waste":
      return [
        "Recycle more household waste.",
        "Use reusable shopping bags and bottles.",
        "Avoid single-use plastics.",
      ];

    default:
      return [
        "Keep tracking your activities regularly.",
        "Set weekly reduction goals.",
        "Look for small daily habits that reduce emissions.",
      ];
  }
};

module.exports = generateTips;