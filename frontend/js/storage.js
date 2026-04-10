// storage.js

const saveActivitiesToLocalStorage = (activities) => {
  localStorage.setItem("activities", JSON.stringify(activities));
};

const getActivitiesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("activities")) || [];
};

const clearActivitiesFromLocalStorage = () => {
  localStorage.removeItem("activities");
};