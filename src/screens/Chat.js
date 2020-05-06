import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, List} from 'react-native';
import {SearchBar, ListItem, Avatar, Header} from 'react-native-elements';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {setLogin} from '../redux/actions/ActionsAuth';

class Chat extends Component {
  state = {
    search: '',
    users: [],
  };
  arrayholder = [];
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          },
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
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
        console.log('hahaha', current_user);
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
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    const {search} = this.state;
    console.disableYellowBox = true;
    return (
      <View>
        <Header
          containerStyle={{marginTop: -30, backgroundColor: '#FF941F'}}
          centerComponent={{text: 'TALKTO', style: {color: '#fff'}}}
        />
        <SearchBar
          containerStyle={{
            borderRadius: 20,
            backgroundColor: '#fff',
            borderTopColor: 0,
            borderBottomColor: 0,
          }}
          inputContainerStyle={{
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
          inputStyle={{
            marginVertical: 0,
            paddingVertical: 0,
          }}
          placeholderTextColor={{backgroundColor: '#FF941F'}}
          placeholder="Search ..."
          onChangeText={(text) => this.SearchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.text}
        />
        {/* <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}> */}
        <FlatList
          data={this.state.users}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Room Chat', item)}>
              <ListItem
                title={item.name}
                ItemSeparatorComponent={this.ListViewItemSeparator}
                // title={item.title}
                subtitle="online"
                rightSubtitle="17.30"
                bottomDivider
                leftElement={() => (
                  <View>
                    <Avatar
                      rounded
                      source={{
                        uri: item.picture,
                      }}
                    />
                  </View>
                )}
                enableEmptySections={true}
                style={{marginTop: 10}}
                keyExtractor={(item, index) => index.toString()}
              />
            </TouchableOpacity>
          )}
        />
        {/* </List> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.login,
});

export default connect(mapStateToProps, {setLogin})(Chat);
