import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useList} from '../Providers/ListProvider';
import TouchableButton from './TouchableButton';
import {getWeather} from '../lib/openWeather';

const styles = StyleSheet.create({
  label: {
    color: '#566078',
    fontSize: 18,
    marginBottom: 8,
    alignSelf: 'center',
  },
  input: {
    fontSize: 24,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 24,
  },
  tempText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#161D4B',
    paddingBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
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
          <Text style={styles.label}>Defina uma nome para a localização</Text>
          <TextInput
            onChangeText={setname}
            style={styles.input}
            onSubmitEditing={submit}
          />
          <View style={styles.buttonContainer}>
            <TouchableButton text="Cancelar" onPress={onCancel} secondary />
            <TouchableButton text="Confirmar" onPress={submit} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.tempText}>{`${apidata.main.temp} ºC`}</Text>
          <View style={styles.buttonContainer}>
            <TouchableButton text="Cancelar" onPress={onCancel} secondary />
            <TouchableButton
              text="Favoritar"
              onPress={() => {
                setInput(true);
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}

export default Weather;
