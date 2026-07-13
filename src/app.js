async function getWeatherAPI(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=SAESCZN7R5S6P3RM6SVXUHAL3`,
    );
    const data = await response.json();
    if (data) {
      const weatherData = processDataFromAPI(data);
      return weatherData;
    }
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
}

function processDataFromAPI(data) {
  const address = data.address;
  const datetime = data.days[0].datetime;
  const temperature = data.currentConditions.temp;
  const feelsLike = data.currentConditions.feelslike;
  const description = data.description;
  const icon = data.currentConditions.icon;
  return { address, datetime, temperature, feelsLike, description, icon };
}

function fahrenheitToCelsius(weatherData) {
  const fahrenheit = weatherData.temperature;
  const celsius = Math.round(((fahrenheit - 32) * 5) / 9);
  return celsius;
}

async function searchWeatherByLocation(location) {
  try {
    const weatherData = await getWeatherAPI(location);

    if (weatherData) {
      console.log("Weather Data:", weatherData);

      const celsius = fahrenheitToCelsius(weatherData);
      console.log("Celsius Temperature:", celsius);
    }
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
}

export { searchWeatherByLocation };
