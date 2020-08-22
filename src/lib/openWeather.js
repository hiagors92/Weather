import axios from 'axios';

const KEY = '47ca20bc7ef8bce22d81657f823a72a6';

export async function getWeather(lat, long) {
  return await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${KEY}&units=metric`,
  );
}
