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
      <MapView.Marker
        coordinate={{
          latitude: this.props.route.params.latitude,
          longitude: this.props.route.params.longitude,
        }}
        title="Lala Location"
        description="Hey"
      />
    );
    return (
      <>
        {/* <Image
          style={{
            width: '100%',
            height: '30%',
          }}
          source={require('../assets/images/profile.jpg')}
        />
        <View style={styles.name}>
          <Text>Ayako</Text>
        </View>
        <TouchableOpacity style={styles.coloumn}>
          <Icon
            name="block"
            color="red"
            size={18}
            style={{marginLeft: 5, marginBottom: 2}}
          />
          <Text style={{color: 'red', fontSize: 19, height: 30, marginLeft: 5}}>
            Block
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.coloumn}>
          <Icon
            name="thumbs-down"
            color="red"
            size={20}
            style={{marginLeft: 5, marginBottom: -5}}
          />
          <Text style={{color: 'red', fontSize: 19, marginLeft: 2}}>
            Report Contact
          </Text>
        </TouchableOpacity> */}

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
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
