import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEmail from 'react-native-vector-icons/Fontisto';
import IconPass from 'react-native-vector-icons/Feather';

// style={styles.inputIcon}

const {width: WIDTH} = Dimensions.get('window');
const styles = StyleSheet.create({
  parents: {
    flex: 1,
    backgroundColor: '#F1AD25',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    alignItems: 'center',
    height: 100,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  inputText: {
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  inputIcon: {
    position: 'absolute',
    top: 7,
    left: 11,
  },
  logoinput: {
    position: 'absolute',
    top: 9,
    left: 37,
  },

  logotext: {
    color: 'white',
    fontSize: 20,
    marginTop: 15,
  },
  btnSignIn: {
    width: WIDTH - 55,
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default class LoginScreen extends Component {
  onHandleToSignUp = () => {
    this.props.navigation.navigate('Register');
  };
  onHandleToForgotPass = () => {
    this.props.navigation.navigate('Forgot Password');
  };
  onHandleToHome = () => {
    this.props.navigation.navigate('MainHome');
  };
  render() {
    return (
      <View style={styles.parents}>
        <View style={styles.logo}>
          <Icon name="wechat" size={80} style={styles.icon} />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Email Address"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnSignIn}
            onPress={this.onHandleToHome}>
            <Text style={{textAlign: 'center'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.onHandleToForgotPass}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.onHandleToSignUp}>
            <Text> Don't have an account? Sign up free</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
    );
  }
}
