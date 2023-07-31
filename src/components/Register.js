import { createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import {auth} from "../config/firebase";

export const Register = (props) =>{

    const [user,setUser] = useState('');
    const [pass, setPass] = useState('');


    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, user, pass)
          .then((userCredential) => {
            console.log(userCredential);
            
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const handleSubmit = async ()=> {
        alert("Sign Up Successful");
        try {
            const email=await createUserWithEmailAndPassword (auth,user,pass);
            console.log(email);
            
        }
        catch (error){
            console.log(error.massage);
        }
    };
    return(
       
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" >
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
                <button onClick={handleSubmit} type="submit">Sign Up</button>
        </form ><br/>
        </div>
        
        )
    }



