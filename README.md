# weather-app

Live preview can be found <a href="https://motokaneyuki.github.io/weather-app/">here</a>.

<img src="./src/assets/img/preview.png" width="500px">

## Overview

This is a real-time weather forecasting application.

The primary objective of this project was to master asynchronous JavaScript. It fetches live data from a weather API, processes the raw JSON response to extract specific metrics, and dynamically updates the DOM layout.

This was especially fun to do because it was good practice for me to get specific info from the API data. I've been wanting a simple weather app that showed specific contents I wanted like the UV index, wind speed, and rain probability without all the other info clutter.

I'd like to add the feature that would let a user handpick what kind of details they'd like to see on their screen for a fully-customized experience.

## What I learned

- **Asynchronous JavaScript:** Mastered using `fetch` alongside `async` and `await` keywords to handle network requests and API connection streams.
- **API Integration:** Connected to third-party weather data providers and constructed dynamic URL request strings based on user inputs.
- **JSON Data Parsing:** Processed deeply nested JSON objects into clean, simplified data containing only the metrics needed for the UI.
- **Error & Exception Handling:** Implemented `try...catch` blocks to catch network errors, API downtime, or invalid city names, preventing application crashes.
- **Dynamic UI State Transitions:** Managed loading indicators and visual changes to show users when data is actively being fetched from the server.
- **Code Consistency:** Utilized **ESLint** and **Prettier** configurations to enforce strict formatting rules across modern modules.
- and more

## Attributions

Weather data provided by [WeatherAPI](https://www.weatherapi.com/)

Background Photo by <a href="https://unsplash.com/@sebastiengoldberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sébastien Goldberg</a> on <a href="https://unsplash.com/photos/mountains-under-white-clouds-during-daytime-WoB5ISOLg88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Loading CSS component from [CSS Loaders](https://css-loaders.com/)
