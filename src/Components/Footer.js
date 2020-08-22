import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import LocationModal from './LocationModal';
import TouchableButton from './TouchableButton';

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
        <TouchableButton
          onPress={() => setModalOpen(true)}
          text="Pesquisar clima"
        />
      </View>
    </SafeAreaView>
  );
};

export default Footer;
