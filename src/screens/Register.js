import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {View, Text} from 'react-native';
import IconEmail from 'react-native-vector-icons/Fontisto';
import IconPass from 'react-native-vector-icons/FontAwesome';
import IconPhone from 'react-native-vector-icons/Entypo';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

export default class Register extends Component {
  onHandleToLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          paddingHorizontal: 20,
          alignContent: 'center',
        }}>
        <ScrollView>
          <View style={{marginTop: 40}}>
            <View>
              <Text
                style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
                Create Account
              </Text>
            </View>
            <View>
              <Input
                inputContainerStyle={{
                  color: '#fff',
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                }}
                containerStyle={{marginVertical: 10}}
                inputStyle={{color: 'black', fontSize: 15}}
                label="Name Contact"
                labelStyle={{fontSize: 15}}
                placeholder="your name contact"
                leftIconContainerStyle={{
                  marginLeft: 10,
                  marginRight: 10,
                  paddingBottom: 0,
                }}
                leftIcon={<Icon name="user" size={24} color="black" />}
              />
            </View>
            <View>
              <Input
                inputContainerStyle={{
                  color: '#fff',
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                }}
                containerStyle={{marginVertical: 10}}
                inputStyle={{color: 'red', fontSize: 15}}
                label="Phone"
                labelStyle={{fontSize: 15}}
                placeholder="your number phone"
                leftIconContainerStyle={{
                  marginLeft: 10,
                  marginRight: 10,
                  paddingBottom: 0,
                }}
                leftIcon={<IconPhone name="phone" size={24} color="black" />}
              />
            </View>
            <View>
              <Input
                inputContainerStyle={{
                  color: '#fff',
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                }}
                containerStyle={{marginVertical: 10}}
                inputStyle={{color: 'red', fontSize: 15}}
                labelStyle={{fontSize: 15}}
                label="Email Addrees"
                placeholder="your email address"
                leftIconContainerStyle={{
                  marginLeft: 10,
                  marginRight: 10,
                  paddingBottom: 0,
                }}
                leftIcon={<IconEmail name="email" size={24} color="black" />}
              />
              <View>
                <Input
                  inputContainerStyle={{
                    color: '#fff',
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                  }}
                  containerStyle={{marginVertical: 10}}
                  inputStyle={{color: 'red', fontSize: 15}}
                  label="Password"
                  labelStyle={{fontSize: 15}}
                  placeholder="your password"
                  leftIconContainerStyle={{
                    marginLeft: 10,
                    marginRight: 10,
                    paddingBottom: 0,
                  }}
                  leftIcon={<IconPass name="lock" size={24} color="black" />}
                />
              </View>
              <View>
                <Input
                  inputContainerStyle={{
                    color: '#fff',
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                  }}
                  containerStyle={{marginVertical: 10}}
                  inputStyle={{color: 'red', fontSize: 15}}
                  label="Confirm Password"
                  labelStyle={{fontSize: 15}}
                  placeholder="confirm your password"
                  leftIconContainerStyle={{
                    marginLeft: 10,
                    marginRight: 10,
                    paddingBottom: 0,
                  }}
                  leftIcon={<IconPass name="lock" size={24} color="black" />}
                />
              </View>

              <View>
                <Button
                  containerStyle={{marginTop: 20, paddingHorizontal: 30}}
                  title="Sign Up"
                  onPress={this.onHandleToLogin}
                />
              </View>
              <TouchableOpacity>
                <Text style={{textAlign: 'center', marginTop: 20}}>
                  Already have an account yet? Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
