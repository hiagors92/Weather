import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Weather from './Weather';
import Map from './Map';
import TouchableButton from './TouchableButton';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalStyle: {
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
  spacedButton: {
    marginTop: 8,
  },
});

const LocationModal = ({visible, onCancel, onSave}) => {
  const [latLong, setlatLong] = useState(null);
  const [enableMap, setEnableMap] = useState(false);

  const getCurrentLocation = async () => {
    const grantedLocation = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (grantedLocation === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition((position) => {
        setlatLong({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalStyle}>
          {latLong ? (
            <Weather
              lat={latLong.lat}
              long={latLong.long}
              onCancel={() => {
                setlatLong(null);
                setEnableMap(false);
                onCancel();
              }}
              onSave={() => {
                setlatLong(null);
                setEnableMap(false);
                onSave();
              }}
            />
          ) : enableMap ? (
            <Map onConfirm={setlatLong} onCancel={() => setEnableMap(false)} />
          ) : (
            <>
              <Text style={styles.text}>
                Deseja utilizar sua localização atual?
              </Text>
              <TouchableButton
                onPress={getCurrentLocation}
                text="Usar minha localização"
              />
              <TouchableButton
                onPress={() => setEnableMap(true)}
                text="Inserir outra localização"
                style={styles.spacedButton}
              />
              <TouchableButton
                onPress={() => {
                  setlatLong(null);
                  onCancel();
                }}
                text="Cancelar"
                secondary
                style={styles.spacedButton}
              />
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;
