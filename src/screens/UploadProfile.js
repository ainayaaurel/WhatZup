import React, {Component} from 'react';
import {Avatar, Input} from 'react-native-elements';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class UploadProfile extends Component {
  render() {
    return (
      <View style={{paddingHorizontal: 20}}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            showEditButton
          />
        </View>
        <View>
          <Input
            containerStyle={{marginVertical: 10}}
            label="Name"
            placeholder="Name"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
        </View>
      </View>
    );
  }
}
