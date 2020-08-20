import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import TopBar from './Components/TopBar';
import List from './Components/Scenes/List';

const styles = StyleSheet.create({
  full: {
    height: '100%',
  },
});

const App = () => (
  <View>
    <TopBar />
    <List />
  </View>
);

export default App;
