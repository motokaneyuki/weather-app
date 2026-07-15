import { getLocationWeatherData, fahrenheitToCelsius } from "./app.js";

function getUserInputLocation() {
  const location = document.querySelector("#location").value;
  return location;
}

function renderScreen(weather) {
  const conditions = document.querySelector(".conditions");
  const extraInfo = document.querySelector(".extraInfo");
  const temperature = document.querySelector(".temperature");

  const keys = [
    "icon",
    "address",
    "conditions",
    "uvindex",
    "windspeed",
    "precipprob",
    "temperature",
  ];

  keys.forEach((key) => {
    const div = document.createElement("div");
    div.classList.add(`${key}Div`);

    if (key === "uvindex") {
      div.textContent = "UV Index: " + weather[key];
      extraInfo.appendChild(div);
    } else if (key === "windspeed") {
      div.textContent = "Wind Speed: " + weather[key];
      extraInfo.appendChild(div);
    } else if (key === "precipprob") {
      div.textContent = "Chance of Rain: " + weather[key];
      extraInfo.appendChild(div);
    } else if (key === "temperature") {
      div.textContent = weather[key];
      temperature.appendChild(div);
    } else {
      div.textContent = weather[key];
      conditions.appendChild(div);
    }
  });
}

export function initializeForm() {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const location = getUserInputLocation();
    console.log("location", location);
    const weather = await getLocationWeatherData(location);
    console.log("weather", weather);
    renderScreen(weather);
  });
}
