import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#161D4B',
  },
});

const TopBar = () => (
  <View>
    <Text style={styles.text}>Weather App</Text>
  </View>
);

export default TopBar;
