import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useList} from '../Providers/ListProvider';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text: {
    fontSize: 50,
  },
});

const key = '47ca20bc7ef8bce22d81657f823a72a6';

async function getWeather(lat, long) {
  return await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${key}&units=metric`,
  );
}

const Item = ({id, title, latlong}) => {
  const [temp, settemp] = useState();
  const {removeLocation} = useList();

  useEffect(() => {
    getWeather(latlong.lat, latlong.long).then((response) => {
      const data = response.data;
      settemp(data.main.temp);
    });
  }, [latlong]);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text>{`${temp}ºC` || 'qq'}</Text>
      <TouchableOpacity
        onPress={() => {
          removeLocation(id);
        }}>
        <Text>Remover</Text>
      </TouchableOpacity>
    </View>
  );
};

const List = () => {
  const {locationList} = useList();
  const renderItem = ({item}) => (
    <View>
      <Item title={item.title} latlong={item.latlong} id={item.id} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={locationList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default List;
