import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2ED3C5',
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButton: {
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#161D4B',
    fontSize: 16,
  },
});

const TouchableButton = ({text, secondary, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[secondary ? styles.secondaryButton : styles.button, style]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchableButton;
