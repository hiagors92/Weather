import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import TopBar from './Components/TopBar';
import List from './Components/Scenes/List';
import ListProvider from './Providers/ListProvider';

const styles = StyleSheet.create({
  full: {
    height: '100%',
  },
});

const App = () => (
  <ListProvider>
    <View>
      <TopBar />
      <List />
    </View>
  </ListProvider>
);

export default App;
