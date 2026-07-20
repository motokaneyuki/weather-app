async function getWeatherAPI(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?
      unitGroup=metric&key=SAESCZN7R5S6P3RM6SVXUHAL3&contentType=json`,
    );
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
}

function getSpecificDataFromAPI(data) {
  const temperature = data.currentConditions.temp;
  const tempInCelsius = fahrenheitToCelsius(temperature);
  const conditions = data.currentConditions.conditions;
  const uvindex = data.currentConditions.uvindex;
  const windspeed = `${data.currentConditions.windspeed} m/s`;
  const precipprob = `${data.currentConditions.precipprob}%`;
  return {
    temperature,
    tempInCelsius,
    conditions,
    uvindex,
    windspeed,
    precipprob,
  };
}

async function getLocationWeatherData(location) {
  try {
    const weatherData = await getWeatherAPI(location);
    return getSpecificDataFromAPI(weatherData);
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
}

function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

export {
  getWeatherAPI,
  getSpecificDataFromAPI,
  getLocationWeatherData,
  fahrenheitToCelsius,
};
