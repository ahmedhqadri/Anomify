import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase';
import LoginScreen from './screens/LoginScreen.js'

var styles = require('./styles.js')

const firebaseConfig = {
  apiKey: "AIzaSyBb3XjdNrIZvPohw5UIvA-8r1v3e4qjlR0",
  authDomain: "anomify-2b515.firebaseapp.com",
  databaseURL: "https://anomify-2b515.firebaseio.com/",
  storageBucket: "gs://anomify-2b515.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


class Anomify extends Component {
  render() {
    return (
      <View style={styles.container}>
      <LoginScreen/>
      </View>
    );
  }
}

module.exports = Anomify;
