import React from 'react';
import history from './history.js';
// - - > VECTOR Imports
import { ReactComponent as Syringe3 } from './Images/syringe-solid.svg'; 
import { ReactComponent as IdVector } from './Images/id-card-solid.svg';
import { ReactComponent as MedicVector } from './Images/user-md-solid.svg';
// - - > Import Registration.css file
import './registration.css';

var travellerMedicalID, travellerUsername; // Dynamic Datax
// - - > Initialize Fonts for Registration
var InitializeRegistrationFonts = () => { // Importing fonts from googleapis (very cool method instead of downloading fonts)
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

// - - > Registration Navigation Bar
function returnToHomeFromReg(){
    history.push({
       pathname: '/',
       query: '?query=homePage',
    });
}
function registrationAboutUSButton(){
    alert("about us button clicked!");
}
function registrationInventoryButton(){
    alert("inventory button clicked!");
}

var RegistrationPageNav = () => {
    return(
        <div className="registration-nav-bar">
            <Syringe3 className="syringe-registration-vector" />
            <span className="vacctrack-title-registration" onClick={() => returnToHomeFromReg()}>VaccTrack.ph</span>
            <button className="registration-about-us-button" onClick={() => registrationAboutUSButton()}>About Us</button>
            <button className="registration-inventory-button" onClick={() => registrationInventoryButton()}>Inventory</button>
            {/*DOCTOR Details Portion*/}
            <span className="doctor-details-label">Doctor Details:</span>
            <div className="doc-deets-box">
                <IdVector className="id-vector" />
                <span className="med-id-dynamic">{travellerMedicalID}</span>
                <MedicVector className="med-user-vector" />
                <span className="med-username-dynamic">{travellerUsername}</span>
            </div>            
        </div>
    );
}


export default class RegistrationPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dummy: ''
        };
    }
    componentDidMount(){
        document.title = "VaccTrack.ph";
    }

    // - - > Initiating Function
    travellerDataInitiation(){
        travellerMedicalID = this.props.location.state.passedID;
        travellerUsername = this.props.location.state.passedUsername;
    }

    render(){
        this.travellerDataInitiation();
        return(
            <div>
                {/*Initializing The Registration Fonts = Header*/}
                <InitializeRegistrationFonts />
                <RegistrationPageNav />
                {/*Registration Body Portion*/}
                
            </div>
        );
    }
}
