import React, {Component} from 'react';
import {Avatar, Input, Button} from 'react-native-elements';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class UploadProfile extends Component {
  state = {
    picture: '',
  };

  handleChoosePhoto = () => {
    const options = {
      quality: 0.7,
      mediaType: 'photo',
      noData: true,
      storageOptions: {
        path: 'images',
        cameraRoll: true,
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.error) {
        console.log(error);
      } else if (!response.didCancel) {
        this.setState({
          upload: true,
          picture: response,
        });
      }
    });
  };

  render() {
    return (
      <View style={{paddingHorizontal: 20}}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <TouchableOpacity onPress={this.handleChoosePhoto}>
            {this.state.picture ? (
              <Avatar
                size="xlarge"
                rounded
                source={{
                  uri: this.state.picture.uri,
                }}
                showEditButton
              />
            ) : (
              <Avatar
                size="xlarge"
                rounded
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                showEditButton
              />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Input
            containerStyle={{marginVertical: 10}}
            label="Name"
            placeholder="Name"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
        </View>

        <Button
          title="upload"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}
