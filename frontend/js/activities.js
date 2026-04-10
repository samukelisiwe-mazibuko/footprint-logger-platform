// activities.js

const addActivity = async (activityData) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  try {
    const response = await fetch("http://localhost:5000/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: JSON.stringify(activityData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Activity added successfully");
      console.log(data);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};