import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import TopBar from './Components/TopBar';

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

const App = () => <TopBar></TopBar>;

export default App;

{
  /* <View style={styles.container}>
    <Image source={require('./img/logo-tt.png')} style={styles.logo}></Image>
    <Text style={styles.text}>Clima</Text>
  </View>/ */
}
