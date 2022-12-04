import React from 'react';
import { useMsal } from "@azure/msal-react";

const SignOutButton = () => {

    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        });
    }
    
    return (
        <>    
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
                Sign Out
            </button>
        </>  
    );
  };
  
export default SignOutButton;