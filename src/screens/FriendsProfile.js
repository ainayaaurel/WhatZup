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

export default class FriendsProfile extends Component {
  render() {
    return (
      <SafeAreaView>
        <Image
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
        </TouchableOpacity>

        <View style={{backgroundColor: 'white'}}>
          <Image
            style={{
              width: '100%',
              height: '65%',
            }}
            source={require('../assets/images/maps.jpeg')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  coloumn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 5,
    height: 50,
    alignItems: 'center',
  },
});
