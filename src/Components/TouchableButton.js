import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 16,
    margin: 6,
    backgroundColor: '#dbced2',
    borderRadius: 10,
  },
  secondaryButton: {
    padding: 16,
    margin: 6,
  },
  text: {
    color: 'black',
  },
});

const TouchableButton = ({text, secondary, onPress}) => {
  return (
    <TouchableOpacity
      style={secondary ? styles.secondaryButton : styles.button}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchableButton;
