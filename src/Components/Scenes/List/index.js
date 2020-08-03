import React from 'react';
import {View, StyleSheet} from 'react-native';
import List from '../../List';
import Location from '../../Location';

const styles = StyleSheet.create({
  full: {
    height: '100%',
  },
});

const App = () => (
  <View style={styles.full}>
    <List />
    <Location />
  </View>
);

export default App;
