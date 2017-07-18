import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import LoginScreen from './src/LoginScreen'
import LoginButton from './components/LoginButton'
import MessagesScreen from './src/MessagesScreen' //Testing Messages Screen
var styles = require('./styles.js')
import Firebase from './src/Firebase'


class Anomify extends Component {
  render() {
    return (
        <LoginScreen />
    );
  }
}

module.exports = Anomify;
