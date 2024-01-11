import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import axiosSecure from "../API/axiosSecure";
const auth = getAuth(app);
export const AuthContext =createContext(null)
const AuthContextProvider = ({children}) => {
const [user ,setUser]=useState(null)
const [loading ,setLoading]=useState(true)  
const GoogleProvider  = new GoogleAuthProvider()
const axiosPublic =useAxiosPublic()
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
    axiosSecure.post('/jwt',userInfo).then(data=>console.log(data))
    
      
    }
   
    console.log('current user ' ,user);
    setLoading(false)
  })

  return ()=>unsubscribe()
},[axiosPublic])

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
