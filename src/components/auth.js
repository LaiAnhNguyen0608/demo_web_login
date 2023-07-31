import { auth } from "../config/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
  
      return () => {
        listen();
      };
    }, []);
  
    const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
          alert("Sign out successfull");
        })
        .catch((error) => console.log(error));
    };
  
    return (
      <div id="authNote">
        {authUser ? (
          <>
            <p><b>{`Signed In as ${authUser.email}`}</b></p>
            <button onClick={userSignOut}>Sign Out</button>
          </>
        ) : (
          <br/>
        )}
      </div>
    );
  };
  
  export default AuthDetails;