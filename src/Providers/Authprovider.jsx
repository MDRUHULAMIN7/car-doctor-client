import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext();

const auth = getAuth(app)


const Authprovider = ( {children}) => {
    const[user,setUser]=useState(null);
const[loader,setLoader]=useState(true);


const signup =(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password,loader)
}
const signin =(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logout=()=>{

  
    

return signOut(auth);
}

useEffect(()=>{
    const Unsubscribe=onAuthStateChanged(auth,currentUser=>{
        const userEmail = currentUser?.email || user?.email;
        const loggeduser = {email:userEmail}

        setUser(currentUser)
        console.log('usseffect',currentUser);
        setLoader(false)
        // if user exist then issue a token 
        if(currentUser){
         
            axios.post('http://localhost:5000/jwt',loggeduser,{withCredintials:true})
            .then(res =>{
                console.log(res.data);
            })
        
            
        }
        else{
            axios.get('http://localhost:5000/logout',{
                withCredintials:true
            })
            .then(res=>{
                console.log(res.data);
            })
        }
    })
    return()=>{
        Unsubscribe();
    }
},[user?.email])

    const AuthInfo ={user,loader,signup,setUser,signin,logout }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;