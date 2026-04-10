// dashboard.js

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

if (!userInfo) {
  window.location.href = "login.html";
}

const token = userInfo.token;

const loadDashboard = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/activities", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const activities = await response.json();

    const totalEmission = activities.reduce(
      (sum, activity) => sum + activity.co2Value,
      0
    );

    document.getElementById("totalEmission").textContent = totalEmission;
    document.getElementById("activityCount").textContent = activities.length;
  } catch (error) {
    console.error(error);
  }
};

loadDashboard();