import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import TouchableButton from './TouchableButton';

const styles = StyleSheet.create({
  map: {
    width: 300,
    height: 400,
  },
  spacedButton: {
    marginTop: 8,
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
      <TouchableButton
        onPress={() => {
          onConfirm({lat: latLong.latitude, long: latLong.longitude});
        }}
        text="Confirmar"
        style={styles.spacedButton}
      />
      <TouchableButton
        onPress={onCancel}
        text="Cancelar"
        secondary
        style={styles.spacedButton}
      />
    </View>
  );
};

export default Map;
