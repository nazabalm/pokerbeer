import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDquzFz6aldM-0VtiITbYnGuHRF_UZVi3A",
  authDomain: "poker-beer.firebaseapp.com",
  databaseURL: "https://poker-beer.firebaseio.com",
  projectId: "poker-beer",
  storageBucket: "poker-beer.appspot.com",
  messagingSenderId: "376479010216",
  appId: "1:376479010216:web:c17b09301a06caace8a19d",
  measurementId: "G-6ZFEDC8VP2"
};

firebase.initializeApp(config);

export default firebase;