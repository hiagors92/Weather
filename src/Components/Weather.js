import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const key = '47ca20bc7ef8bce22d81657f823a72a6';

async function getWeather(lat, long) {
  return await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${key}&units=metric`,
  );
}

function Weather({lat, long}) {
  const [loading, setloading] = useState(true);
  const [apidata, setapidata] = useState(null);
  useEffect(() => {
    getWeather(lat, long)
      .then((response) => {
        const data = response.data;
        setapidata(data);
        setloading(false);
      })
      .catch((error) => console.log({error}));
  }, [lat, long]);

  return (
    <View>
      {loading || !apidata ? (
        <Text>Loading...</Text>
      ) : (
        <Text>{`${apidata.main.temp} graus`}</Text>
      )}
    </View>
  );
}

export default Weather;
