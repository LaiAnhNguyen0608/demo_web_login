import React, {useState} from "react";
import { signInWithEmailAndPassword,onAuthStateChanged, } from "firebase/auth";
import {auth} from "../config/firebase";
import AuthDetails from "./auth";


export const Login = (props) =>{

    

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, user, pass)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
            const errMessage=error.message;
            alert(errMessage);
          });
      };



//
    const [user,setUser] = useState('');
    const [pass,setPass] =useState('');

    const handleSubmit = async ()=> {
        try {
            const email=await signInWithEmailAndPassword (auth,user,pass);
            }
        catch (error){
            console.log(error.massage);
        }
    };

    return(
        
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form">
            <label htmlFor="user">Username</label>
            <input 
                value={user} 
                onChange={(e)=>setUser(e.target.value)} 
                type="user" 
                placeholder="your username" 
                required
            />
            <label htmlFor="password">Password</label>
            <input 
                value={pass} 
                onChange={(e)=>setPass(e.target.value)} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password"
                required
            /><br/>
            <button onClick={handleLogin} type="submit">Log In </button>
        </form><br/>
        </div>
        )
    }
    
