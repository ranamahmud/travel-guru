import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';
// import { handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../Auth/LoginManager';
import fb from "../../../../images/icon/fb.png";
import google from "../../../../images/icon/google.png"
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from '../LoginManager';
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

    const googleSignIn = () => {
        console.log("google clicked")
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
                console.log(res);

            })
    }

    // const signOut = () => {
    //     handleSignOut()
    //         .then(res => {
    //             handleResponse(res, false);

    //         })
    // }

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
        handleFbSignIn()
            .then(res => {
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

        // if (user.email && user.password) {
        //     createUserWithEmailAndPassword(user.name, user.email, user.password)
        //         .then(res => {
        //             handleResponse(res, true);

        //         })
        // }

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
        <Container id="login-form">
            {
                loggedInUser.error && <Alert variant='danger'>
                    {loggedInUser.error}
                </Alert>
            }

            {/*
            <br />
            <button onClick={fbSignIn}>Sign in Using Facebook</button>
            {
                user.isSignedIn &&
                <div>
                    <p>Welcome, {user.name}</p>
                    <p>Your email: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }

            <h1>Our own Authentication</h1>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign Up</label>

            <form onSubmit={handleSubmit}>
                {
                    newUser && <input type="text" name="name" onBlur={handleBlur} id="" placeholder="Your name" required />
                }
                <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="Your email address" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                <br />
                <input type="submit" value={newUser ? "Sign Up" : "Sign In"} />
            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {
                user.success &&
                <p style={{ color: 'green' }}>User  {newUser ? 'craeted' : 'Logged in'} successfully</p>
            } */}
            <Form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Username or Email" onBlur={handleBlur} required />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Control type="password" placeholder="Password" onBlur={handleBlur} required />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button id="form-login-btn" type="submit">
                    Login
  </Button>

            </Form>
            <br />
            <br />
            <p>Don't have an account? <Link to="/create-account">Create an account</Link></p>
            <p id="or"><span>or</span></p>
            <Button><img src={fb} onClick={fbSignIn} className="company-icon" />Continue with Facebook</Button>
            <br />
            <Button><img src={google} onClick={googleSignIn} className="company-icon" />Continue with Google</Button>
        </Container>
    );
}

export default Login;
