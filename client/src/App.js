import React from 'react';
import './App.css';
import { PageLayout } from "./PageLayout.jsx";

//import SideNav from './components/SideNav';

export default function App() {
    return (
        <>
            {/*Side Nav, Top Nav, and Admin Dashboard needed*/}
            <PageLayout>
                {/*<AuthenticatedTemplate>
                    <ProfileContent />
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <p>You are not signed in! Please sign in.</p>
                </UnauthenticatedTemplate>*/}
            </PageLayout>
            {/*Used for Google Icons*/}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet" />
        </>
    );
}

