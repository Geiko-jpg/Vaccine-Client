import React from 'react';
// - - > VECTOR IMPORTS
import { ReactComponent as Syringe2 } from './Images/syringe-solid.svg';
import './login.css';

var InitializeLoginFonts = () => { // Importing fonts from googleapis (very cool method instead of downloading fonts)
    return(
        <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        </head>
    );
}

// - - > LOGIN HEADER COMPONENTS
var LoginPageNav = () => {
    return(
        <div className="login-nav-bar">
            <Syringe2 className="syringe-login-vector" />
            <span className="vacctrack-title-login">VaccTrack.ph</span>
        </div>
    );
}

export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummy: 'hello login page',
        }
    }
    componentDidMount(){
        document.title = "VaccTrack.ph";
    }

    render(){
        return(
            <div>
                {/*Upon Push to Login Page // HEADER*/}
                <InitializeLoginFonts />
                <LoginPageNav />
                {/*Login Page Body*/}
            </div>
        );
    }
}