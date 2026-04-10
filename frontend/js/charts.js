// charts.js

const renderPieChart = (transport, food, energy, waste) => {
  const ctx = document.getElementById("emissionChart").getContext("2d");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Transport", "Food", "Energy", "Waste"],
      datasets: [
        {
          label: "CO2 Emissions",
          data: [transport, food, energy, waste],
          backgroundColor: [
            "#4CAF50",
            "#2196F3",
            "#FFC107",
            "#F44336",
          ],
        },
      ],
    },
  });
};