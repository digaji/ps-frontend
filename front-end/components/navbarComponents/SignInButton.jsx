import React from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../azureAuth.config";

const SignInButton = () => {

    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.log(e);
        });
    }
    
    return (
        <>    
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
            Sign in
        </button>
        </>  
    );
  };
  
export default SignInButton;