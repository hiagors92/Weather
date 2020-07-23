import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  logo: {
    width: '100%',
  },
});

const TopBar = () => (
  <View style={styles.container}>
    <Image source={require('../img/logo-tt.png')} style={styles.logo}></Image>
    <Text style={styles.text}>Clima</Text>
  </View>
);

export default TopBar;
