import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBktzCw8fsUjxmjJnfqejUZbQnsCKSXV5E",
  authDomain: "aulareactfirebase-dc574.firebaseapp.com",
  databaseURL: "https://aulareactfirebase-dc574.firebaseio.com",
  projectId: "aulareactfirebase-dc574",
  storageBucket: "aulareactfirebase-dc574.appspot.com",
  messagingSenderId: "681862876222",
  appId: "1:681862876222:web:13e8b850cf326c7468556f",
  measurementId: "G-KMWHQYCZNW"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
