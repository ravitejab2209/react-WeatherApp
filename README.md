# React Weather App

### The React Weather App is a simple weather application built using React. It allows users to search for weather information based on location and displays relevant details. Here’s how the app is structured:

## Components

### Search Box Component: The Search Box provides an input field where users can enter a city name or location.
### It connects to the OpenWeatherMap API to fetch weather data based on the user’s input.
###  Info Box Component: The Info Box receives the weather data fetched from the API.
### It displays relevant information such as temperature, humidity, wind speed, and weather conditions.
### WeatherApp Component: The WeatherApp component ties everything together.
### It manages the state, handles API requests, and renders the Search Box and Info Box components.
###  When the user enters a location, the WeatherApp component fetches weather data and passes it to the Info Box for display.
