import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Avatar, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconPhone from 'react-native-vector-icons/Entypo';
import {setLogOut} from '../redux/actions/ActionsAuth';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Profile extends Component {
  onHandleToUpdateProfile = () => {
    this.props.navigation.navigate('Update Profile');
  };
  render() {
    console.log(this.props.logout);
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
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
        </View>
        <View>
          <IconPhone name="phone" size={24} color="black" />
          <Input
            containerStyle={{marginVertical: 10}}
            inputContainerStyle={{borderBottomWidth: 0}}
            label="Phone"
          />
        </View>

        <TouchableOpacity onPress={this.onHandleToUpdateProfile}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>

        <Button
          containerStyle={{marginTop: 10}}
          title="LogOut"
          onPress={() => this.props.setLogOut()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  logout: state.login.isLogin,
});

export default connect(mapStateToProps, {setLogOut})(Profile);
