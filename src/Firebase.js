import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBb3XjdNrIZvPohw5UIvA-8r1v3e4qjlR0",
  authDomain: "anomify-2b515.firebaseapp.com",
  databaseURL: "https://anomify-2b515.firebaseio.com",
  storageBucket: "gs://anomify-2b515.appspot.com",
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
