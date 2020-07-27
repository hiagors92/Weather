import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});

const List = () => (
  <View>
    <Text style={style.text}>Test</Text>
  </View>
);

export default List;
