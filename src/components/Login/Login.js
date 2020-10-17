import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button } from '@material-ui/core';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../images/google.png'
import { Container, Form } from 'react-bootstrap';
import './Login.css'
import logo from '../../images/logos/logo.png'

const Login = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }


    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function(idToken) {
        sessionStorage.setItem('token',idToken);
      }).catch(function(error) {
        // Handle error
      });
    }

    return (
        <Container className="text-center text-white">
        <img className="mt-5" style={{width:'20%',marginRight:'4%'}} src={logo}></img>
        <div id="login" className="mx-auto p-3 rounded bg-light" style={{textAlign: 'center'}}>
            <h3>Login With</h3>
            <Button variant="outlined" className=" my-3 rounded-pill" onClick={handleGoogleSignIn}>
                <img src={google} className="icon" alt=""/>
                <h5>Continue with Google</h5>
            </Button>
            <h6>Don't have an account? Create an account</h6>
        </div>
      </Container> 
    );
};

export default Login;
