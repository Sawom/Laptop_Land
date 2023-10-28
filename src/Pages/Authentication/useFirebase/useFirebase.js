import React, { useEffect, useState } from 'react';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut, }  from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
import Swal from 'sweetalert2';
import axios from 'axios';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [ error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    
    const auth = getAuth();

     // google login
    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const loggedInUser = result.user;
                const saveUser = {name:loggedInUser.displayName, email: loggedInUser.email}
                fetch('https://laptoplanddb-production.up.railway.app/users', {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then( ()=>{
                     Swal.fire({
                            title: 'User Login Successful!',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                                }
                        })

                } )
                setError('');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    // observer if login or not
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      // console.log('currentUser',currentUser);
      if (currentUser) {
        axios.post('https://laptoplanddb-production.up.railway.app/jwt', { email: currentUser.email })
          .then(data => {
            // console.log(data.data.token);
            localStorage.setItem('access-token', data.data.token)
          }).catch(error => {
            console.log({error: error.message});
          })
          setLoading(false)
      }
      else {
        localStorage.removeItem('access-token')
        setLoading(false)
      }
    })
    return () => {
      return unsubscribe()
    }
  }, [])

    // logout user 
    const logoutUser = () => {
        signOut(auth).then(() => {
            
        }).catch((error) => {
            const errorMessage = error.message;
            setError(error.message);
        })
    }

    return (
        {
            user,
            loading,
            signInWithGoogle,
            logoutUser,
        }
    );
};

export default useFirebase;