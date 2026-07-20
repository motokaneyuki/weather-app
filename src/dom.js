import { getLocationWeatherData } from "./app.js";

const conditions = document.querySelector(".conditions");
const extraInfo = document.querySelector(".extraInfo");
const temperature = document.querySelector(".temperature");
const convertContainer = document.querySelector(".convertContainer");
const convert = document.createElement("button");
convert.classList.add("convert");
convert.textContent = "Convert to Celsius";

let weather;

function getUserInputLocation() {
  const location = document.querySelector("#location").value;
  return location;
}

function renderScreen(weather) {
  convertContainer.appendChild(convert);

  const keys = [
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
      if (convert.classList.contains("celsius")) {
        div.textContent = weather.tempInCelsius + "°C";
      } else {
        div.textContent = weather[key] + "°F";
      }
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
    weather = await getLocationWeatherData(location);
    clearScreen();
    renderScreen(weather);
  });
}

function clearScreen() {
  conditions.replaceChildren();
  extraInfo.replaceChildren();
  temperature.replaceChildren();
}

convert.addEventListener("click", () => {
  convert.classList.toggle("celsius");
  if (convert.classList.contains("celsius")) {
    convert.textContent = "Convert to Fahrenheit";
  } else {
    convert.textContent = "Convert to Celsius";
  }
  clearScreen();
  renderScreen(weather);
});
