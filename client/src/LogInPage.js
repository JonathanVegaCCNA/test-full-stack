import React from "react";
import { SignInButton } from "./SignInButton";
//import "./LogInPage.css";



import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { useIsAuthenticated } from "@azure/msal-react";

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

export const LogInPage = () => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    return (

        <div className="home-page">
           {/* {isAuthenticated ? "" : handleLogin(instance)}*/}
            <div className="row">
                <div className="colu">
                   {/* <img className="coke-text" src={CokeText}></img>*/}
                    <p className="greeting">Welcome to Coca Cola Devops</p>
                    <SignInButton />
                </div>

                {/* <div className="colu resp-right-75">
                    <div className="row img-container">
                        <img className="growth-img" src={Agile}></img>
                        <img className="growth-img" src={Empowered}></img>
                    </div>
                    
                    <div className="row img-container">
                        <img className="growth-img" src={Curious}></img>
                        <img className="growth-img" src={Inclusive}></img>
                    </div>      
                </div>*/}
            </div>
        </div>
    );
};