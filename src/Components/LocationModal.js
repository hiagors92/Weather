import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Weather from './Weather';
import Map from './Map';

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

const LocationModal = ({visible, onCancel, onSave}) => {
  const [latlong, setlatlong] = useState(null);
  const [enableMap, setEnableMap] = useState(false);

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalstyle}>
          {enableMap ? (
            <Map
              onConfirm={({latitude, longitude}) => {
                setlatlong({lat: latitude, long: longitude});
                setEnableMap(false);
              }}
              onCancel={() => setEnableMap(false)}
            />
          ) : latlong ? (
            <Weather
              lat={latlong.lat}
              long={latlong.long}
              onCancel={() => {
                setlatlong(null);
                onCancel();
              }}
              onSave={() => {
                setlatlong(null);
                onSave();
              }}
            />
          ) : (
            <>
              <Text style={styles.text}>
                Deseja utilizar sua localização atual?
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  const grantedLocation = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                  );
                  if (grantedLocation === PermissionsAndroid.RESULTS.GRANTED) {
                    Geolocation.getCurrentPosition((position) => {
                      setlatlong({
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                      });
                    });
                  }
                }}>
                <Text style={styles.textbutton}>Usar minha localização</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setEnableMap(true)}>
                <Text>Inserir outra localização</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setlatlong(null);
                  onCancel();
                }}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;
