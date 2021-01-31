import React from 'react';
import history from './history.js';
import axios from 'axios';
// - - > VECTOR IMPORTS
import { ReactComponent as Syringe2 } from './Images/syringe-solid.svg';
import { ReactComponent as MedicalUser } from './Images/user-md-solid.svg';
import { ReactComponent as IdVector } from './Images/user-nurse-solid.svg';
import { ReactComponent as Username } from './Images/user-solid.svg';
import { ReactComponent as Key } from './Images/key-solid.svg';
// - - > Import CSS File
import './login.css';
//import { response } from '../../api/app.js';

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
function pushAboutUsFromLogin(){
    alert("Alerted About Us Button!");
}

function pushInventoryFromLogin(){
    alert("Alerted Inventory Button!");
}

function returnToHome(){
    history.push({
        pathname: '/',
        query: '?query=homePage',
    });
}

var LoginPageNav = () => {
    return(
        <div className="login-nav-bar">
            <Syringe2 className="syringe-login-vector" />
            <span className="vacctrack-title-login" onClick={() => returnToHome()}>VaccTrack.ph</span>
            <button className="login-about-us-button" onClick={() => pushAboutUsFromLogin()}>About Us</button>
            <button className="login-inventory-button" onClick={() => pushInventoryFromLogin()}>Inventory</button>
        </div>
    );
}

// - - > Login Form Design
var LoginForm = () => {
    return(
        <div className="login-form-bg">
            <div id="login-form-platform">
                <span className="medical-portal-text">Medical Portal</span>
                <MedicalUser className="medical-user-vector" />
                <span className="login-sub-text">Please enter your health admin credentials to access patient insertion feature</span> 
                <hr className="login-form-divider" /> 
                <span className="id-code-label">Medical Identification Code</span>
                <IdVector className="med-id-vector" />
                <span className="username-label">Username</span>
                <Username className="username-vector" />
                <span className="password-label">Password</span>
                <Key className="key-vector" />
                <span className="login-bottom-text">Apply your medical identification code to your corresponding hospital to join the mission now!</span>
            </div>
        </div>
    );  
}

// - - > Side Text Design
var SideText = () => {
    return(
        <div className="side-text-container">
            <hr className="first-line" />
            <span className="h1-login">For the Children.<br/><br/> For the People. <br/><br/> For Frontliners.<br/><br/> By Students.</span> 
            <hr className="second-line"/>
        </div>
    );
}

export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            medicalID: '',
            userName: '',
            password: '',
            loginFlag: false
        }
        // - - > Event Handlers
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeID = this.handleChangeID.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleResetLogin = this.handleResetLogin.bind(this);
        // - - > Login Signal
        this.signal = React.createRef(); // indicates invalid or valid login
    }
    componentDidMount(){
        document.title = "VaccTrack.ph";
    }

    handleChangeID(event){
        this.setState({medicalID: event.target.value});
    }
    handleUsername(event){
        this.setState({userName: event.target.value});
    }
    handlePassword(event){
        this.setState({password: event.target.value});
    }

    handleLoginSubmit(event){
        /*AXIOS FETCH TO LOGIN VALIDATION*/ 
        axios.post(`http://localhost:9000/loginValidation`, { // fetching loginValidation method from server
            medID: this.state.medicalID,
            medicalUser: this.state.userName,
            medicalPassword: this.state.password
        }).then((response) => { // get response process
            let state = response.data;
            this.setState({loginFlag: state});
            // - - > 
            if(this.state.loginFlag === true){
                alert("User Found");
                this.signal.current.style.background = "#56CCF2";

                // - - > PUSHING THE VARIABLE
                history.push({
                    pathname: '/registration',
                    query: '?query=registrationPage',
                    state: {
                        passedID: this.state.medicalID, // passing medical id to registration
                        passedUsername: this.state.userName // passing username to registration
                    }
                });
            }else{
                alert(`User NOT Found -> ${this.state.medicalID} | ${this.state.userName} | ${this.state.password}`);
                this.signal.current.style.background = "#A02B2B";
            }
            this.setState({medicalID: '', userName: '', password: '', loginFlag: false});
        }, (error) => { // Catch ERROR if fail to fetch
            console.log(error);
        });

        event.preventDefault();
    }

    handleResetLogin(event){ // resets input fields
        this.setState({medicalID: '', userName: '', password: '', loginFlag: false});
        this.signal.current.style.background = "white";
        event.preventDefault();
    }

    render(){
        return(
            <body>
                <div className="login-bg-coloration">
                    {/*Upon Push to Login Page // HEADER*/}
                    <InitializeLoginFonts />
                    <LoginPageNav />
                    {/*Login Page Body*/}
                    <LoginForm />
                    <div className="login-signalling" ref={this.signal}></div>
                    <form onReset={this.handleResetLogin} onSubmit={this.handleLoginSubmit} method='POST' action='http://localhost:9000/loginValidation' id="login-form">
                        <div className="id-code-field">
                            <input type="text" name="medID" placeholder="Medical ID" value={this.state.medicalID} onChange={this.handleChangeID} />
                        </div>
                        <div className="username-field">
                            <input type="text" name="username" placeholder="Valid User ID" value={this.state.userName} onChange={this.handleUsername} />
                        </div>
                        <div className="password-field">
                            <input type="password" placeholder="Valid Password" value={this.state.password} onChange={this.handlePassword} />
                        </div>
                        <input type="submit" value="Submit" className="login-submit-button" />
                        <input type="reset" value="Reset" className="login-reset-button" />
                    </form>
                    <SideText />
                </div>
            </body>
        );
    }
}