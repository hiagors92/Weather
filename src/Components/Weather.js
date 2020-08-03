import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Modal,
  PermissionsAndroid,
} from 'react-native';

const key = '47ca20bc7ef8bce22d81657f823a72a6';

async function getWeather(lat, long) {
  return await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${key}`,
  );
}

function Weather({lat, long}) {
  const [loading, setloading] = useState(true);
  const [apidata, setapidata] = useState(null);
  useEffect(() => {
    getWeather(lat, long).then((response) => {
      const data = response.json();
      setloading(false);
      setapidata(data);
    });
  }, [lat, long]);
  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>{`${apidata.main.temp} graus`}</Text>
      )}
    </View>
  );
}
