import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    width: '100%',
  },
});

const TopBar = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Weather App</Text>
  </View>
);

export default TopBar;
