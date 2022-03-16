
import firebase from "firebase/app";
import 'firebase/firestore'


let firebaseConfig = {
    apiKey: "AIzaSyBjSxiTKhVsrkQ1ta3q6Q3k46UDwRSZSLw",
    authDomain: "board-c3c5a.firebaseapp.com",
    projectId: "board-c3c5a",
    storageBucket: "board-c3c5a.appspot.com",
    messagingSenderId: "786750797189",
    appId: "1:786750797189:web:30dcb02e5a8fa3232580ec"
  };
  
  // Initialize Firebase

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase