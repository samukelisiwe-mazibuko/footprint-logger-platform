// auth.js

const API_URL = "http://localhost:5000/api/auth";

// Register User
const registerUser = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      alert("Registration successful");
      window.location.href = "login.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

// Login User
const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      alert("Login successful");
      window.location.href = "dashboard.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};