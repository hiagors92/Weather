import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useList} from '../Providers/ListProvider';
import TouchableButton from './TouchableButton';
import {getWeather} from '../lib/openWeather';

const styles = StyleSheet.create({
  input: {
    width: 200,
    fontSize: 24,
    height: 50,
    backgroundColor: 'white',
  },
});

function Weather({lat, long, onCancel, onSave}) {
  const [loading, setloading] = useState(true);
  const [apidata, setapidata] = useState(null);
  const [nameInput, setInput] = useState(false);
  const [name, setname] = useState();
  const {addLocation} = useList();

  useEffect(() => {
    getWeather(lat, long).then((response) => {
      const data = response.data;
      setapidata(data);
      setloading(false);
    });
  }, [lat, long]);

  function submit() {
    addLocation({name, latLong: {lat, long}});
    onSave();
  }

  return (
    <View>
      {loading || !apidata ? (
        <Text>Loading...</Text>
      ) : nameInput ? (
        <>
          <TextInput
            onChangeText={setname}
            style={styles.input}
            onSubmitEditing={submit}
          />
          <TouchableButton text="Cancelar" onPress={onCancel} />
          <TouchableButton text="Confirmar" onPress={submit} />
        </>
      ) : (
        <>
          <Text>{`${apidata.main.temp} graus`}</Text>
          <TouchableButton text="Cancelar" onPress={onCancel} />
          <TouchableButton
            text="Favoritar"
            onPress={() => {
              setInput(true);
            }}
          />
        </>
      )}
    </View>
  );
}

export default Weather;
