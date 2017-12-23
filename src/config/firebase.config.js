import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCSSzlct8KwIjDga71fYMPwEypB8Tnl5Lc",
    authDomain: "reactstudentmanagementsystem.firebaseapp.com",
    databaseURL: "https://reactstudentmanagementsystem.firebaseio.com",
    projectId: "reactstudentmanagementsystem",
    storageBucket: "reactstudentmanagementsystem.appspot.com",
    messagingSenderId: "232109859198"
};

firebase.initializeApp(config);

export default firebase;