import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

var styles = require('../styles.js');
import LoginButton from '../components/LoginButton'
import TextInputField from '../components/TextInputField'
import MessagesScreen from '../src/MessagesScreen'


class LoginScreen extends Component {

  constructor(props) {
     super(props);
  };

  render() {

    return (
      <View style={styles.container}>
        <LoginButton title="LOGIN"/>
        <TextInputField />
      </View>

    );
  }
}


module.exports = LoginScreen;
