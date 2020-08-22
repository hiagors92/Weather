import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useList} from '../Providers/ListProvider';
import {getWeather} from '../lib/openWeather';

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingBottom: 8,
    marginVertical: 4,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#EAEBEC',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#566078',
  },
  temperature: {
    fontSize: 16,
    color: '#566078',
  },
  button: {
    backgroundColor: '#566078',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

const ListItem = ({id, title, latLong}) => {
  const [temp, setTemp] = useState();
  const {removeLocation} = useList();

  useEffect(() => {
    getWeather(latLong.lat, latLong.long).then(({data}) => {
      setTemp(data.main.temp);
    });
  }, [latLong]);

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {temp ? <Text style={styles.temperature}>{`${temp}ºC`}</Text> : null}
      </View>
      <TouchableOpacity
        onPress={() => {
          removeLocation(id);
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
