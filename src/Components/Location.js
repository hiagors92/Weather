import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: '100%',
    position: 'absolute',
    bottom: 40,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Location = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Pesquisar clima"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  </SafeAreaView>
);

export default Location;
