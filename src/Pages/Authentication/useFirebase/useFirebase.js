import React, { useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [ error, setError] = useState('');

    

    return (
        <div>
            
        </div>
    );
};

export default useFirebase;