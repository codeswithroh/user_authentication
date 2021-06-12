import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAHM5jqjDVNkQjwmwcDlZtelIqUMmywhkc",
  authDomain: "user-authentication-d28f9.firebaseapp.com",
  projectId: "user-authentication-d28f9",
  storageBucket: "user-authentication-d28f9.appspot.com",
  messagingSenderId: "836622349229",
  appId: "1:836622349229:web:64645dd4307a36c2dfe724",
};
const fire= firebase.initializeApp(firebaseConfig);

export default fire;
