import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
import "firebase/compat/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyCtmHdgIswnZOppUwYrxOxqy3uOE6gOdFM",
    authDomain: "slack-clone-22d84.firebaseapp.com",
    projectId: "slack-clone-22d84",
    storageBucket: "slack-clone-22d84.appspot.com",
    messagingSenderId: "570397614438",
    appId: "1:570397614438:web:3e03fbda718f2823b4a8a7",
    measurementId: "G-CYF59L6NRE"
  };

  firebase.initializeApp(firebaseConfig);


  export default firebase;