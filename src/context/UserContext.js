import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from  '../firebase/firebase.config';

export const AuthContext= createContext();
const auth = getAuth(app);


const UserContext = ({children}) => {
    const [user,setUser]=useState({});


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe=  onAuthStateChanged(auth,currentUSer=>{
            console.log('current user inside the state changed',currentUSer);
            setUser(currentUSer);
        });

        return ()=>unsubscribe();

    },[])


    const authInfo={user,createUser,signIn,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;