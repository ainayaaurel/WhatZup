import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomStack from './src/screens/BottomStack';

// import screen
import Login from './src/screens/LoginScreen';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import ForgotPassword2 from './src/screens/ForgotPassword2';
import Chat from './src/screens/Chat';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
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
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="MainHome"
            component={BottomStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
