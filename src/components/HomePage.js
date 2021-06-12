import React,{useEffect,useState} from "react";
import Tilt from "react-tilt";
import person from '../assets/svgs/person.svg';
import mail from '../assets/svgs/mail.svg';
import cats from '../assets/svgs/cats.svg';
import fire from '../config/fire';
import './HomePage.css';


export default function HomePage() {
  const [name,setName]= useState('Lorem Ipsum');
  const [email,setEmail]= useState('Lorem Ipsum');
  const [photo,setPhoto]= useState('');
  useEffect(() => {
    var user= fire.auth().currentUser;
    if(user){
      setName(user.displayName);
      setEmail(user.email);
      setPhoto(user.photoURL);
    }else {
      console.log('No user found')
    }
  },[])
  return (
    <div className="homepage">
        <img className="welcome" src={cats} alt="welcome"></img>
        <Tilt
          className='Tilt'
          options={{ max: 25, scale: 1.1 }}
        >
          <div className='Tilt-inner'>
            <div className="user-card">
                <div style={{backgroundImage:`url(${photo})`}} className='user-profile-pic'></div>
                <div className="user-details">
                    <div className="user-name">
                        <img src={person} alt='person'></img>
                        <h1>{name}</h1>
                    </div>
                    <div className="user-email">
                        <img src={mail} alt="mail"></img>
                        <h1>{email}</h1>
                    </div>
                </div>
            </div>
          </div>
        </Tilt>
    </div>
  );
}
