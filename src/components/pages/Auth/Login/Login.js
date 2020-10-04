import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';
import fb from "../../../../images/icon/fb.png";
import google from "../../../../images/icon/google.png"
import { createUserWithEmailAndPassword, resetPassword, handleFbSignIn, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from '../LoginManager';
import "./Login.css"
function Login() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } }

    // const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photoURL: '',
        error: '',
        success: false
    })

    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(user);
    const googleSignIn = () => {
        console.log("google clicked")
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
                console.log(res);

            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);

        if (redirect && res.success === true) {
            console.log("button clicked");
            console.log(user.email, user.password)
            history.replace(from);
        }
    }

    const fbSignIn = () => {
        console.log("fb signin clicked");
        handleFbSignIn()
            .then(res => {
                console.log(res);
                handleResponse(res, true);

            })
    }
    const handleBlur = (e) => {

        let isFieldValid = true;

        if (e.target.id === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.id === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.id] = e.target.value;
            setUser(newUserInfo);
            console.log(e.target.id);
            console.log(e.target.value);
        }
    }

    const handleSubmit = (e) => {

        if (user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log("signed in with email")
                    console.log(res)
                    handleResponse(res, true);

                })

        }
        e.preventDefault();

    }


    return (

        <Container>
            {
                // loggedInUser.error && <Alert variant='danger'>
                //     {loggedInUser.error}
                // </Alert>
            }

            < Container id="login-form" >



                <Form onSubmit={handleSubmit} >
                    <h3>Login</h3>
                    <Form.Group controlId="email">
                        <Form.Control type="email" placeholder="Username or Email" onBlur={handleBlur} required />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Control type="password" placeholder="Password" onBlur={handleBlur} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Group style={{ display: 'inline-block' }} controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <a href="#" id="forget-password" onClick={() => resetPassword(user.email)}>Forgot Password</a>


                    </Form.Group>

                    <Button id="form-login-btn" type="submit">
                        Login
  </Button>
                    <p className="d-flex justify-content-center">Don't have an account? <Link to="/create-account">Create an account</Link></p>

                </Form >
                <p id="or"><span>or</span></p>

                <div className="d-flex justify-content-center continue-btn-container">

                    <button className="continue-btn" onClick={fbSignIn} ><img src={fb} className="company-icon" />Continue with Facebook</button>
                    <br />

                </div>
                <div className="d-flex justify-content-center">

                    <button className="continue-btn" onClick={() => googleSignIn} ><img src={google} className="company-icon" />Continue with Google</button>
                </div>
            </Container >

        </Container>
    );
}

export default Login;
