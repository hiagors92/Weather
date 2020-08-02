import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Modal} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalstyle: {
    maxWidth: 338,
    padding: 20,
    backgroundColor: '#EAEBEC',
    alignItems: 'center',
    elevation: 11,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 16,
  },
  button: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#dbced2',
    borderRadius: 10,
  },
  textbutton: {
    color: 'black',
  },

  textbutton2: {
    fontWeight: 'bold',
  },
});

const LocationModal = ({visible}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalstyle}>
          <Text style={styles.text}>
            Deseja utilizar sua localização atual?
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalOpen(true)}>
            <Text style={styles.textbutton}>Usar minha localização</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalOpen(true)}>
            <Text>Inserir outra localização</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;
