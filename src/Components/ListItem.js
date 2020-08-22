import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useList} from '../Providers/ListProvider';
import {getWeather} from '../lib/openWeather';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
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
      <Text style={styles.title}>{title}</Text>
      {temp ? <Text>{`${temp}ºC`}</Text> : null}
      <TouchableOpacity
        onPress={() => {
          removeLocation(id);
        }}>
        <Text>Remover</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
