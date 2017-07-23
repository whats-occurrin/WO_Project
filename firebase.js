 
 import firebase from 'firebase';

 const config = {
   apiKey: 'AIzaSyCQ7RL6-AStBt3f4YhSLh4el5aQH7HBSzw',
   authDomain: 'whats-occurrin.firebaseapp.com',
   databaseURL: 'https://whats-occurrin.firebaseio.com',
   projectId: 'whats-occurrin',
   storageBucket: 'whats-occurrin.appspot.com',
   messagingSenderId: '104730148110'
 };

 firebase.initializeApp(config);

 export default firebase;

 // export const database = firebase.database();
 export const auth = firebase.auth();
 // export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
