import React, { useEffect, useState } from 'react';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut, }  from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [ error, setError] = useState('');

    const auth = getAuth();

     // google login
    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    } 

     // observer if user signin or not
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user)=>{
                if(user){
                    setUser(user);
                } else{
                    setUser({})
                }
        });
        return () => unsubscribed;
    }, [auth]) 

    // logout user 
    const logoutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }

    return (
        {
            user,
            signInWithGoogle,
            logoutUser,
        }
    );
};

export default useFirebase;