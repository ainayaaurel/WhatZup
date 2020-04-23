import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
Geolocation.setRNConfiguration({skipPermissionRequests: true});

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class maps extends Component {
  componentDidMount() {
    Geolocation.getCurrentPosition((info) => console.log(info));
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation
          zoomControlEnabled
          minZoomLevel={14}
          initialRegion={{
            latitude: -6.6211252,
            longitude: 106.818001,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

// [Thu Apr 23 2020 04:58:43.765]  LOG      {"coords": {"accuracy": 31.336000442504883, "altitude": 0, "heading": 0, "latitude": -6.6211252, "longitude": 106.818001, "speed": 0}, "mocked": false, "timestamp": 1587592354689}
