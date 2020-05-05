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
import {Avatar, Card, Button} from 'react-native-elements';
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
      <View>
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
        <View>
          <Card title="HELLO WORLD">
            <View>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </View>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMaps: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: '100%',
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
