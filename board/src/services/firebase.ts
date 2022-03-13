
import firebase from "firebase/app";
import 'firebase/firestore'


let firebaseConfig = {
    apiKey:process.env.API_KEY ,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.API_ID
  };
  
  // Initialize Firebase

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase