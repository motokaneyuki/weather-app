import {
  getWeatherAPI,
  getSpecificDataFromAPI,
  fahrenheitToCelsius,
} from "./app.js";

test("converts fahrenheit to celsius", () => {
  expect(fahrenheitToCelsius(80)).toBe(27);
  expect(fahrenheitToCelsius(100)).toBe(38);
  expect(fahrenheitToCelsius(70.5)).toBe(21);
});

test("returns weather data from API", async () => {
  const fakeData = {
    address: "tokyo",
    currentConditions: {
      temp: 79.1,
      precipprob: 0,
      windspeed: 3.8,
      uvindex: 0,
      conditions: "Overcast",
      icon: "cloudy",
    },
  };
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(fakeData),
  });
  const results = await getWeatherAPI("tokyo");

  expect(results).toEqual(fakeData);
});

test("returns the specific data from api call", () => {
  const fakeData = {
    address: "tokyo",
    currentConditions: {
      temp: 79.1,
      precipprob: 0,
      windspeed: 3.8,
      fakeline: 2,
      uvindex: 0,
      conditions: "Overcast",
      icon: "cloudy",
    },
  };
  expect(getSpecificDataFromAPI(fakeData)).toEqual({
    address: "tokyo",
    temperature: 79.1,
    conditions: "Overcast",
    uvindex: 0,
    windspeed: 3.8,
    precipprob: 0,
    icon: "cloudy",
  });
});
