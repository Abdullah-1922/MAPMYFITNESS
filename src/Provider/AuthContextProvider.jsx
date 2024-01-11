import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

import axiosSecure from "../API/axiosSecure";
import axiosPublic from "../API/axiosPublic";

const auth = getAuth(app);
export const AuthContext =createContext(null)
const AuthContextProvider = ({children}) => {
const [user ,setUser]=useState(null)
const [loading ,setLoading]=useState(true)  
const GoogleProvider  = new GoogleAuthProvider()

const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}
const signInUser=(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}
const googleSignIn=( )=>{
  setLoading(true)
  return signInWithPopup(auth,GoogleProvider)
}

const logOut=async()=>{
  setLoading(true)
    await  axiosSecure.get('/logout')
  return signOut(auth)
}
const updateUserProfile=(name,photo)=>{
  return updateProfile(auth.currentUser, {
    displayName:name, photoURL: photo
  })
}

useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,user=>{
    setUser(user)
    if(user){
      //get token 
      const userInfo ={email: user.email}
    axiosSecure.post('/jwt',userInfo)
   const userData ={
    email: user.email,
    role: 'user',
    userFrom : new Date(),
    lastLogin : new Date(),
   }


    axiosPublic.put(`/users/:${user.email}`,userData).then(
      data=> {
        if(data){
         setLoading(false) 
        }
      }
    )
      
    }
   
    console.log('current user ' ,user);
    
  })

  return ()=>unsubscribe()
},[])

 const authInfo={
  user,
  loading,
  createUser,
  signInUser,
  logOut,
  updateUserProfile,
  googleSignIn
}
 
  return (



    <AuthContext.Provider value={authInfo}>
     {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
