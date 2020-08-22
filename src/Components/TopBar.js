import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#566078',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

const TopBar = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Weather App</Text>
  </View>
);

export default TopBar;
