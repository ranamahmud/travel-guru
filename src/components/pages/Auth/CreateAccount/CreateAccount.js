import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
// import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
// import { handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../LoginManager';
import fb from "../../../../images/icon/fb.png";
import google from "../../../../images/icon/google.png"
import "./CreateAccount.css"
function CreateAccount() {
    // let history = useHistory();
    // let location = useLocation();

    // let { from } = location.state || { from: { pathname: "/" } }

    // const [newUser, setNewUser] = useState(false);
    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     photoURL: '',
    //     error: '',
    //     success: false
    // })

    // initializeLoginFramework();
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const googleSignIn = () => {
    //     handleGoogleSignIn()
    //         .then(res => {
    //             handleResponse(res, true);

    //         })
    // }

    // const signOut = () => {
    //     handleSignOut()
    //         .then(res => {
    //             handleResponse(res, false);

    //         })
    // }

    // const handleResponse = (res, redirect) => {
    //     setUser(res);
    //     setLoggedInUser(res);
    //     if (redirect) {
    //         history.replace(from);
    //     }
    // }

    // const fbSignIn = () => {
    //     handleFbSignIn()
    //         .then(res => {
    //             handleResponse(res, true);

    //         })
    // }
    // const handleBlur = (e) => {
    //     let isFieldValid = true;

    //     if (e.target.name === 'email') {
    //         isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    //     }
    //     if (e.target.name === 'password') {
    //         const isPasswordValid = e.target.value.length > 6;
    //         const passwordHasNumber = /\d{1}/.test(e.target.value);
    //         isFieldValid = isPasswordValid && passwordHasNumber;
    //     }
    //     if (isFieldValid) {
    //         const newUserInfo = { ...user };
    //         newUserInfo[e.target.name] = e.target.value;
    //         setUser(newUserInfo);
    //     }
    // }

    // const handleSubmit = (e) => {
    //     if (newUser && user.email && user.password) {
    //         createUserWithEmailAndPassword(user.name, user.email, user.password)
    //             .then(res => {
    //                 handleResponse(res, true);

    //             })
    //     }

    //     if (!newUser && user.email && user.password) {
    //         signInWithEmailAndPassword(user.email, user.password)
    //             .then(res => {
    //                 handleResponse(res, true);

    //             })

    //     }
    //     e.preventDefault();

    // }


    return (
        <Container>
            {/* {
                user.isSignedIn === true ?
                    <button onClick={signOut}>Sign Out</button> :
                    <button onClick={googleSignIn}>Sign in</button>

            }
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
            <Form id="login-form">
                <h3>Create an account</h3>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>


                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Username or Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPasswordConfirm">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create an account
  </Button>
                <br />
                <br />
                <p>Already have an account?<a href="#">Login</a></p>
                <p id="or"><span>or</span></p>
                <Button><img src={fb} className="company-icon" />Continue with Facebook</Button>
                <br />
                <Button><img src={google} className="company-icon" />Continue with Google</Button>
            </Form>
        </Container>
    );
}

export default CreateAccount;
