import React from 'react';
import {useHistory} from 'react-router-dom';
import "./App.css";
import underline from "./assets/svgs/underline.svg";
import social from "./assets/svgs/social.svg";
import google from "./assets/svgs/google.svg";
import facebook from "./assets/svgs/facebook.svg";
import firebase from "firebase";
import fire from "./config/fire";

function App() {
  let history= useHistory();
  const GoogleSignIn = (e) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        history.push('./home');
      })
      .catch((error) => {
        console.log(error)
      });
  };
  return (
    <div className='App'>
      <div className='main-heading'>
        <div className='heading'>USER-AUTHENTICATION</div>
        <div className='underline'>
          <img src={underline} alt='underline'></img>
        </div>
      </div>
      {/* body */}
      <div className='body'>
        <div className='google' onClick={(e) => GoogleSignIn(e)}>
          <div className='google-icon'>
            <img src={google} alt='google'></img>
          </div>
          <div className='google-text'>Sign Up With Google</div>
        </div>
        <div className='facebook'>
          <div className='facebook-icon'>
            <img src={facebook} alt='facebook'></img>
          </div>
          <div className='facebook-text'>Sign Up With Facebook</div>
        </div>
      </div>
      <div className='sign-up-svg'>
        <img className='social-image' src={social} alt='background'></img>
      </div>
    </div>
  );
}

export default App;
