import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {SearchBar, ListItem, Avatar, Badge} from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

class Chat extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
  };
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
          data={list}
          renderItem={({item}) => (
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
                    containerStyle={{position: 'absolute', top: -4, right: -4}}
                  />
                </View>
              )}
            />
          )}
        />
      </View>
    );
  }
}
export default Chat;
