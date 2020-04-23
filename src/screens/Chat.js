import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {SearchBar, ListItem, Avatar, Badge} from 'react-native-elements';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
class Chat extends Component {
  state = {
    search: '',
    users: [],
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  componentDidMount() {
    this.getDataUser();
  }
  getDataUser() {
    database()
      .ref('users/')
      .on('value', (snapshot) => {
        const current_user = auth().currentUser.uid;
        const data = snapshot.val();
        const user = Object.values(data);
        const result = user.filter((user) => user.uid !== current_user);
        this.setState({
          users: result,
        });
      });
  }
  // componentWillMount() {
  //   this.state.dbRef.off;
  // }
  render() {
    const {search} = this.state;
    return (
      <View>
        <SearchBar
          containerStyle={{borderRadius: 20, backgroundColor: '#fff'}}
          inputContainerStyle={{backgroundColor: '#fff'}}
          placeholderTextColor={{backgroundColor: '#fff'}}
          placeholder="Search ..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <FlatList
          data={this.state.users}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Room Chat', item)}>
              <ListItem
                title={item.name}
                subtitle={item.subtitle}
                bottomDivider
                chevron
                leftElement={() => (
                  <View>
                    <Avatar
                      rounded
                      source={{
                        uri:
                          'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                      }}
                    />
                    <Badge
                      status="success"
                      containerStyle={{
                        position: 'absolute',
                        top: -4,
                        right: -4,
                      }}
                    />
                  </View>
                )}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
export default Chat;
