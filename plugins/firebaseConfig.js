import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBgXdHPL8K4EVuDXwucnfZaB5YXIu2rJIg',
    authDomain: 'fcloud348.firebaseapp.com',
    databaseURL: 'https://fcloud348.firebaseio.com',
    projectId: 'fcloud348',
    storageBucket: 'fcloud348.appspot.com',
    messagingSenderId: '167740623360',
    appId: '1:167740623360:web:243b45cc7082c360a8a6e5',
    measurementId: 'G-HC85ZQ2F1N',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
