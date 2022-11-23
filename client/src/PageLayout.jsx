import React from "react";
/*import Navbar from "react-bootstrap/Navbar";*/
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
//import './PageLayout.css';
/*import TopNav from './TopNav';*/


//Uncomment after adding sidenav component
//import SideNav from './SideNav';
/*import { Login, People, PeoplePicker, Person } from '@microsoft/mgt-react';*/ // import login component
import { LogInPage } from './LogInPage';
//import CocaColaText from '../assets/The-Coca-Cola-Company-White-Text.PNG';

import { useState } from 'react';


export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();
    

    const [sideNavActive, toggleSideNavActive] = useState(false);

    function showSideNav() {
        console.log("Show Menu");
        toggleSideNavActive(!sideNavActive);
    }


    return (
        <>
            <nav className="nav-bar black" bg="primary" variant="dark">

                {/*Display hamburger icon on smaller screens, only when logged in*/}
                {isAuthenticated ?
                    <div className="dropdown">
                        <span className="material-icons menu-icon" onClick={() => showSideNav()}>menu</span>
                    </div> : ""}

                <div className="just-left">

                    {/*<img className="coke-text" src={CocaColaText} alt="Coca Cola Company Logo" />*/}
                </div>

                <div className="just-right">



                    {/*Displays on larger screens*/}
                    <div className="user-info">
                        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                    </div>



                </div>

            </nav>


            {isAuthenticated ?
                <div className="container-fluid offset-sidenav">Hi{/*<SideNav isActive={sideNavActive} />*/}
                    <div className={sideNavActive ? "active-background" : "inactive-background"} onClick={() => { toggleSideNavActive(false) }}>
                    </div>
                </div>
                :
                <LogInPage />}

            {props.children}


        </>
    );
};