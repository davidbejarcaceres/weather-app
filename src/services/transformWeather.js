import { RAIN, SUN, SNOW, CLOUDY, FOG } from "../consants/weather";

function parseWeatherCondition(weatherCode) {
  let weatherState = SUN;
  if (weatherCode === 800) {
    // Clear Sunny
    weatherState = SUN;
  } else if (weatherCode > 800) {
    // CLOUDS
    weatherState = CLOUDY;
  } else if (weatherCode >= 600 && weatherCode < 700) {
    // SNOW
    weatherState = SNOW;
  } else if (weatherCode >= 500 && weatherCode < 600) {
    // RAIN
    weatherState = RAIN;
  } else if (weatherCode >= 700 && weatherCode < 800) {
    // RAIN
    weatherState = FOG;
  }
  return weatherState;
}

export const transformWeather = json => {
  const { humidity, temp } = json.main;
  const speed = json.wind.speed;
  const weatherState = parseWeatherCondition(json.weather[0].id);

  let nuevosDatos = {
    humidity: humidity,
    temperature: parseInt(temp - 273, 10),
    weatherState: weatherState,
    wind: `${speed} m/s`
  };

  return nuevosDatos;
};

export default transformWeather;
