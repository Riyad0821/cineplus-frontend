import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import './Login.css'
import fblogo from '../../images/fb.png'
import glogo from '../../images/google.png'



function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: ''
    });
  
    initializeLoginFramework();
  
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/movies" } };
  
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res, true);
        })
    }
  
    const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
          handleResponse(res, true);
        })
  
    }
  
    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    }
  
    const handleResponse = (res, redirect) =>{
      setUser(res);
      setLoggedInUser(res);
      if(redirect){
          history.replace(from);
      }
    }
  
    const handleBlur = (e) => {
      let isFieldValid = true;
      if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if(e.target.name === 'password'){
        const isPasswordValid = e.target.value.length > 6;
        const passwordHasNumber =  /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
      }
      if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
    }
    const handleSubmit = (e) => {
      if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
          console.log("Okay");
        })
      }
  
      if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
      }
      e.preventDefault();
    }

  return (
    <div>
      <div className="card login-card">
        <input className="card-label" style={{backgroundColor: 'transparent'}} type="text" value={newUser ? 'Create an account' : 'Login'}/>
        <form onSubmit={handleSubmit}>
        {newUser && <input type="text" name="name" placeholder="Your Name" onBlur={handleBlur} required />}
          <br />
          <input type="text" onBlur={handleBlur} name="email" placeholder="Your Email Address" required />
          <br />
          <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Your Password" required />
          <br />
          <input type="submit" style={{backgroundColor: 'Yellow'}} value={newUser ? 'Create an account' : 'Sign in'} />
          <br/>
          <input type="submit" onClick={() => setNewUser(!newUser)} name="newUser" value={newUser ? 'Already have an account?Log in':'Do not have an account? Create an account'}/>
        </form>
        <br/><button className="fgbtn" onClick={fbSignIn}> <img className="fglogo" src={fblogo} alt=""/> Continue with Facebook</button>
        <button class="fgbtn" onClick={googleSignIn}> <img className="fglogo" src={glogo} alt=""/> Continue with Google</button>

      </div>
    </div>
  );
}

export default Login;
