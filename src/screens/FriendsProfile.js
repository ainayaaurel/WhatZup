import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Avatar} from 'react-native-elements';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

export default class FriendsProfile extends Component {
  state = {
    latitude: 0,
    longitude: 0,
  };

  render() {
    const marker = (
      <>
        <MapView.Marker
          coordinate={{
            latitude: this.props.route.params.latitude,
            longitude: this.props.route.params.longitude,
          }}
          title={this.props.route.params.name}
          description="My Location">
          <Image
            source={{uri: this.props.route.params.picture}}
            style={{width: 30, height: 38, borderRadius: 40}}
            identifier={this.props.route.params.name}
          />
        </MapView.Marker>
      </>
    );
    return (
      <>
        <View>
          <Text>profile</Text>
        </View>
        <View style={styles.containerMaps}>
          <MapView
            style={styles.map}
            showsUserLocation
            zoomControlEnabled
            minZoomLevel={0}
            initialRegion={{
              latitude: this.props.route.params.latitude,
              longitude: this.props.route.params.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {marker}
          </MapView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerMaps: {
    ...StyleSheet.absoluteFillObject,
    height: '50%',
    width: '100%',

    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  coloumn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 5,
    height: 50,
    alignItems: 'center',
  },
});
