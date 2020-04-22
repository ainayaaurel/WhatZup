import React, {Component} from 'react';
import {SStyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
Geolocation.setRNConfiguration({skipPermissionRequests: true});

export default class maps extends Component {
  componentDidMount() {
    Geolocation.getCurrentPosition((info) => console.log(info));
  }
  render() {
    return (
      <View>
        <Text>hay</Text>
      </View>
    );
  }
}

// [Thu Apr 23 2020 04:58:43.765]  LOG      {"coords": {"accuracy": 31.336000442504883, "altitude": 0, "heading": 0, "latitude": -6.6211252, "longitude": 106.818001, "speed": 0}, "mocked": false, "timestamp": 1587592354689}
