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
  const [latlong, setlatlong] = useState(null);
  console.log('hiago');
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalstyle}>
          <Text style={styles.text}>
            Deseja utilizar sua localização atual?
          </Text>
          {latlong ? (
            <Weather lat={latlong.lat} long={latlong.long} />
          ) : (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                  );
                  console.log({granted});
                  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    Geolocation.getCurrentPosition((position) => {
                      setlatlong({
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                      });
                      console.log(position);
                    });
                  }
                }}>
                <Text style={styles.textbutton}>Usar minha localização</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => null}>
                <Text>Inserir outra localização</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;
