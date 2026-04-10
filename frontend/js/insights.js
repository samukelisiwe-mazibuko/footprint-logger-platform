// insights.js

const loadInsights = async () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  try {
    const response = await fetch("http://localhost:5000/api/insights", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    const data = await response.json();

    document.getElementById("highestCategory").textContent =
      data.highestEmissionCategory;

    document.getElementById("recommendation").textContent =
      data.recommendation;
  } catch (error) {
    console.error(error);
  }
};

loadInsights();