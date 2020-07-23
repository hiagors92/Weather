import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
});

const TopBar = () => (
  <View style={styles.container}>
    <Text>TT</Text>
  </View>
);

export default TopBar;
