import React from "react";
import { useMsal } from "@azure/msal-react";
//import Button from "react-bootstrap/Button";
//import './SignOutButton.css';

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance, accounts } = useMsal();

    return (
        /* BUTTON VARIANTS: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'*/
        <>
            <div className="info-container">
                <p className="name"> {accounts[0].name}</p>
                <p className="email">{accounts[0].username}</p>
            </div>
            <p onClick={() => handleLogout(instance)}>Sign Out</p>
        </>
    );
}