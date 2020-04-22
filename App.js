import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomStack from './src/screens/BottomStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
// import screen
import Login from './src/screens/LoginScreen';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import ForgotPassword2 from './src/screens/ForgotPassword2';
import Chat from './src/screens/Chat';
import RoomChat from './src/screens/RoomChat';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Chat Room"
                component={RoomChat}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
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
              <Stack.Screen
                name="MainHome"
                component={BottomStack}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
