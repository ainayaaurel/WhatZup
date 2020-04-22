import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEmail from 'react-native-vector-icons/Fontisto';
import IconPass from 'react-native-vector-icons/Feather';
// import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

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
  state = {
    email: '',
    password: '',
  };

  onSumbitData = (e) => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        auth().onAuthStateChanged((Users) => {
          database()
            .ref(`users/${Users.uid}`)
            .once('value')
            .then((data) => {
              console.log('mudahkanlah ya Allah', data.val());
            });
          this.props.navigation.navigate('MainHome');
        });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Wrong Email Or Password');
      });
  };
  handleChange = (key) => (val) => {
    this.setState({[key]: val});
  };
  onHandleToSignUp = () => {
    this.props.navigation.navigate('Register');
  };
  onHandleToForgotPass = () => {
    this.props.navigation.navigate('Forgot Password');
  };
  onHandleToHome = () => {
    this.props.navigation.navigate('MainHome');
  };

  // componentDidMount() {
  //   database().ref('users/').set({email: 'ainaya@gmail.com'});
  // }

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
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnSignIn}
            onPress={this.onSumbitData}>
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
      </View>
    );
  }
}
