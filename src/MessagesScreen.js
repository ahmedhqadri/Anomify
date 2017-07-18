'use strict';

import React, {
  Component,
} from 'react';
import {
  Linking,
  Platform,
  ActionSheetIOS,
  Dimensions,
  View,
  Text,
  Navigator,
} from 'react-native';

import { ref } from './Firebase'


var GiftedMessenger = require('react-native-gifted-messenger');

var UserName = 'test'

class MessagesScreen extends Component {

  constructor(props) {
    super(props);

    this._messagesRef = ref
    this._messages = [];

    this.state = {
      messages: this._messages,
      typingMessage: ''
    };
  }

  componentDidMount() {
    this._messagesRef.on('child_added', (child) => {
      this.handleReceive({
        text: child.val().text,
        name: child.val().name,
        position: child.val().name == UserName && 'right' || 'left',
        date: new Date(child.val().date),
        uniqueId: child.key()
      });
    });
  }

  setMessages(messages) {
    this._messages = messages;

    this.setState({
      messages: messages,
    });
  }

  handleSend(message = {}) {
    this._messagesRef.push({
      text: message.text,
      name: UserName,
      date: new Date().getTime()
    })
  }

  handleReceive(message = {}) {
    this.setMessages(this._messages.concat(message));
  }



  render() {
    return (
      <View>
        <GiftedMessenger
          styles={{
            bubbleRight: {
              marginLeft: 70,
              backgroundColor: '#007aff',
            },
          }}
          messages={this.state.messages}
          handleSend={this.handleSend.bind(this)}
          maxHeight={Dimensions.get('window').height}
        />
      </View>
    );
  }
}


module.exports = MessagesScreen;
