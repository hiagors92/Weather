import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import TopBar from './Components/TopBar';
import List from './Components/List';
import Location from './Components/Location';

const styles = StyleSheet.create({
  full: {
    height: '100%',
  },
});

const App = () => (
  <View style={styles.full}>
    <TopBar />
    <List />
    <Location />
  </View>
);

export default App;
