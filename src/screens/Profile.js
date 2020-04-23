import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {setLogOut} from '../redux/actions/ActionsAuth';
import {connect} from 'react-redux';

class Profile extends Component {
  render() {
    console.log(this.props.logout);
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          showEditButton
        />
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
