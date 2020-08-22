import React, {useState} from 'react';
import {StyleSheet, Button, View, SafeAreaView} from 'react-native';
import LocationModal from './LocationModal';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: '100%',
    position: 'absolute',
    paddingBottom: 90,
    bottom: 40,
  },
});

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LocationModal
          visible={modalOpen}
          onSave={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
        />
        <Button title="Pesquisar clima" onPress={() => setModalOpen(true)} />
      </View>
    </SafeAreaView>
  );
};

export default Footer;
