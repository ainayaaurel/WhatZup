import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
      </View>
    );
  }
}
