'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import MessagesScreen from '../src/MessagesScreen'

var styles = require('../styles')
const constants = styles.constants;
const { StyleSheet, Text, View, TouchableHighlight} = ReactNative;


class LoginButton extends Component {

  render() {
    return (
      <View style={styles.login}>
        <TouchableHighlight
          underlayColor={constants.loginColor}
          onPress={this.props.onPress}>
          <Text style={styles.loginText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = LoginButton;
