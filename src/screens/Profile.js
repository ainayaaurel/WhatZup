import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Avatar, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconPhone from 'react-native-vector-icons/Entypo';
import {setLogin, setLogOut} from '../redux/actions/ActionsAuth';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

class Profile extends Component {
  state = {
    users: [],
  };

  onHandleToUpdateProfile = () => {
    this.props.navigation.navigate('Update Profile');
  };
  render() {
    console.log(this.props.logout);

    return (
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        </View>
        <View>
          <Input
            containerStyle={{marginVertical: 10}}
            label="Name"
            leftIcon={<Icon name="user" size={24} color="black" />}
            disabled={true}
            value={this.props.user.users.name}
          />
        </View>
        <View>
          <Input
            containerStyle={{marginVertical: 10}}
            label="Phone"
            leftIcon={<IconPhone name="phone" size={24} color="black" />}
            disabled={true}
            value={this.props.user.users.phone}
          />
        </View>

        <TouchableOpacity onPress={this.onHandleToUpdateProfile}>
          <Text>Edit</Text>
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
  user: state.login,
});

export default connect(mapStateToProps, {setLogOut, setLogin})(Profile);
