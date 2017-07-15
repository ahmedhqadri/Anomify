'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
var styles = require('../styles')
const constants = styles.constants;
const { StyleSheet, Text, View, TextInput} = ReactNative;

class TextInputField extends Component {

  

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInputField}
          placeholderTextColor="#1E90FF"
          placeholder="ANOMIFY YOURSELF"


          blurOnSubmit={true}
          autoFocus={false}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="done"
          keyboardAppearance="dark"

        />
      </View>
    );
  }
}

module.exports = TextInputField;
