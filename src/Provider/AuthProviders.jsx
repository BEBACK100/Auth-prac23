import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../Components/firebase.config';

export const AuthContext=createContext(null)
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSingin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
   

    const logout=()=>{
        return  signOut(auth)
    }

    useEffect(()=>{
       const unsubScribe= onAuthStateChanged(auth,currentUser=>{

        //    console.log('on state change',currentUser);
           setUser(currentUser)
           setLoading(false)
       });
       return ()=>{
        unsubScribe()
       }
    },[])

    const authinfo={
        user,
        loading,
        createUser,
        signIn,
        googleSingin,
        logout
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;