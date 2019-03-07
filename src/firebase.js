import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAft6Wo6eDjgwwV0c7t23v5EpPnXVckxz4",
  authDomain: "react-weather-racer-bg.firebaseapp.com",
  databaseURL: "https://react-weather-racer-bg.firebaseio.com",
  projectId: "react-weather-racer-bg",
  storageBucket: "react-weather-racer-bg.appspot.com",
  messagingSenderId: "762460298566"
};
firebase.initializeApp(config);

export default firebase;
