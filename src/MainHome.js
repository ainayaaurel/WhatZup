import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomStack from '../src/screens/BottomStack';
// import screen
import Login from '../src/screens/LoginScreen';
import Register from '../src/screens/Register';
import ForgotPassword from '../src/screens/ForgotPassword';
import ForgotPassword2 from '../src/screens/ForgotPassword2';
import Chat from '../src/screens/Chat';
import RoomChat from '../src/screens/RoomChat';
import FriendProfile from '../src/screens/FriendsProfile';
import Maps from '../src/screens/maps';
import UpdateProfile from '../src/screens/UploadProfile';

import {setLogin} from '../src/redux/actions/ActionsAuth';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

class MainHome extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.user.isLogin ? (
            <Stack.Screen
              name="Home"
              component={BottomStack}
              options={{headerShown: false}}
            />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
            </>
          )}
          <Stack.Screen
            name="Room Chat"
            component={RoomChat}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Maps"
            component={Maps}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Friend Profile"
            component={FriendProfile}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Update Profile"
            component={UpdateProfile}
            options={{headerShown: true}}
          />

          <Stack.Screen
            name="Forgot Password"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Make Password"
            component={ForgotPassword2}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
  };
};
export default connect(mapStateToProps, {setLogin})(MainHome);
