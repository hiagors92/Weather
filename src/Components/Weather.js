import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import axios from 'axios';
import {useList} from '../Providers/ListProvider';

const key = '47ca20bc7ef8bce22d81657f823a72a6';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalstyle: {
    maxWidth: 338,
    padding: 20,
    backgroundColor: '#EAEBEC',
    alignItems: 'center',
    elevation: 11,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 16,
  },
  button: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#dbced2',
    borderRadius: 10,
  },
  textbutton: {
    color: 'black',
  },
  input: {
    width: 200,
    fontSize: 24,
    height: 50,
    backgroundColor: 'white',
  },
});

async function getWeather(lat, long) {
  return await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${key}&units=metric`,
  );
}

function Weather({lat, long, onCancel, onSave}) {
  const [loading, setloading] = useState(true);
  const [apidata, setapidata] = useState(null);
  const [nameInput, setInput] = useState(false);
  const [name, setname] = useState();
  useEffect(() => {
    getWeather(lat, long)
      .then((response) => {
        const data = response.data;
        setapidata(data);
        setloading(false);
      })
      .catch((error) => console.log({error}));
  }, [lat, long]);

  const {addLocation} = useList();

  return (
    <View>
      {loading || !apidata ? (
        <Text>Loading...</Text>
      ) : nameInput ? (
        <>
          <TextInput onChangeText={setname} style={styles.input} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onCancel();
            }}>
            <Text style={styles.textbutton}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addLocation({name, latlong: {lat, long}});
              onSave();
            }}>
            <Text style={styles.textbutton}>Confirmar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>{`${apidata.main.temp} graus`}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onCancel();
            }}>
            <Text style={styles.textbutton}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setInput(true);

              // addLocation();
              // onSave();
            }}>
            <Text style={styles.textbutton}>Favoritar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

export default Weather;
