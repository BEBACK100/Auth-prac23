import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../Components/firebase.config';

export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubScribe= onAuthStateChanged(auth,currentUser=>{

           console.log('on state change',currentUser);
           setUser(currentUser)
       });
       return ()=>{
        unsubScribe()
       }
    },[])

    const authinfo={
        user,
        createUser,
        signIn,
        logout
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;