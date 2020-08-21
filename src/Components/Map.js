import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    width: 300,
    height: 400,
  },
});

const Map = ({onConfirm, onCancel}) => {
  const [latLong, setLatLong] = useState({
    latitude: -8.056129395788155,
    longitude: -34.88086458295584,
  });

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          ...latLong,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          draggable
          coordinate={latLong}
          onDragEnd={(e) => setLatLong(e.nativeEvent.coordinate)}
        />
      </MapView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onCancel();
        }}>
        <Text style={styles.textbutton}>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onConfirm(latLong);
        }}>
        <Text style={styles.textbutton}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Map;
