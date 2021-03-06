import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Auth/firebaseConfig";

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var { displayName, photoURL, email } = result.user;
        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true,
        }
        return signedInUser;

    }).catch(err => {
        console.log(err);
        console.log(err.message);
    })
}

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function (result) {
        console.log("35");

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        user.success = true;
        return user;
    }).catch(function (error) {
        console.log("45")
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photoURL: '',
                email: '',
                password: '',
                success: false
            }

            return signedOutUser;
        })
        .catch(err => {

        });
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            verifyEmail();
            return newUserInfo;
        })
        .catch(function (error) {
            // Handle Errors here.
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}


export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch(function (error) {
            // Handle Errors here.
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const updateUserName = name => {
    let user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(function () {
        console.log('User name updated successfully');
    }).catch(function (error) {
        console.log(error);
    });
}

const verifyEmail = () => {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {
        // Email sent.
    }).catch(function (error) {
        // An error happened.
    });
}


export const resetPassword = email => {
    console.log("forget email: " + email);
    var auth = firebase.auth();
    if (email !== "") {
        auth.sendPasswordResetEmail(email).then(function () {
            // Email sent.

        }).catch(function (error) {
            // An error happened.
        });
    }

}