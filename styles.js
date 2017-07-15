'use strict';

var React = require('react-native');

import {
  Dimensions,
} from 'react-native';

var {
  StyleSheet,
} = React;

const constants = {
  loginColor: '#1E90FF'
};

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  login: {
    backgroundColor: constants.loginColor,
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 6,
    bottom: 0,
    right: 0,
    left: 0,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  textInputField: {
    backgroundColor: '#FFFFFF',
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 6,
    top: (Dimensions.get('window').height / 2) - 25,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

module.exports.constants = constants;
