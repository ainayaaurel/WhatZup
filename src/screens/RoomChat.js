import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import {Header} from 'react-native-elements';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Aldi Pranata',
      uid: 'evuEpl68fIOc18f7lrYLQYwam9O2',
      currentUser: {},
      textMessage: '',
      messageList: [],
    };
  }
  componentDidMount() {
    auth().onAuthStateChanged((userId) => {
      console.log(userId.uid, 'HHHHH');
      this.setState({currentUser: userId._user});
      database()
        .ref('/messages/')
        .child(`/${userId.uid}/`)
        .child(`/${this.state.uid}/`)
        .on('child_added', (value) => {
          this.setState((prevState) => {
            return {
              messageList: [...prevState.messageList, value.val()],
            };
          });
        });
    });
  }

  convertTime = (time) => {
    let d = new Date(time);
    let c = new Date();
    let results = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':';
    results += (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    if (c.getDay() !== d.getDay()) {
      results = d.getDay() + '' + d.getMonth() + '' + results;
    }
    return results;
  };
  sendMessage = async () => {
    if (this.state.textMessage.length > 0) {
      try {
        console.log('aaaaa');
        let msgId = (
          await database()
            .ref('messages/')
            .child(`/${this.state.currentUser.uid}/`)
            .child(`/${this.state.uid}/`)
            .push()
        ).key;
        let updates = {};
        let message = {
          message: this.state.textMessage,
          time: database.ServerValue.TIMESTAMP,
          from: this.state.currentUser.uid,
        };
        updates[
          'messages/' +
            this.state.currentUser.uid +
            '/' +
            this.state.uid +
            '/' +
            msgId
        ] = message;
        updates[
          this.state.uid + '/' + this.state.currentUser.uid + '/' + msgId
        ] = message;
        database().ref().update(updates);
        this.setState({textMessage: ''});
      } catch (error) {
        console.log({error});
      }
    }
  };
  renderDate = (date) => {
    return <Text style={styles.time}>{date}</Text>;
  };

  onHandleToFriendProfile = () => {
    this.props.navigation.navigate('Friend Profile');
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{marginTop: -30}}
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={
            <TouchableOpacity onPress={this.onHandleToFriendProfile}>
              <Text>Aldipea</Text>
            </TouchableOpacity>
          }
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <FlatList
          style={styles.list}
          data={this.state.messageList}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            );
          }}
        />
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({textMessage: text})}
            />
          </View>

          <TouchableOpacity style={styles.btnSend} onPress={this.sendMessage}>
            <Image
              source={{
                uri: 'https://png.icons8.com/small/75/ffffff/filled-sent.png',
              }}
              style={styles.iconSend}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: '#00BFFF',
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
  },
  itemOut: {
    alignSelf: 'flex-end',
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 12,
    color: '#808080',
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    borderRadius: 300,
    padding: 5,
  },
});
