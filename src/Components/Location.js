import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Modal,
} from 'react-native';
import LocationModal from './LocationModal';

const Separator = () => <View style={styles.separator} />; //tirar

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: '100%',
    position: 'absolute',
    paddingBottom: 40,
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

const Location = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LocationModal visible={modalOpen} />
        <Button title="Pesquisar clima" onPress={() => setModalOpen(true)} />
      </View>
    </SafeAreaView>
  );
};

export default Location;
