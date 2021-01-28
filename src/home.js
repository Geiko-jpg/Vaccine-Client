import React from 'react';
import axios from 'axios'; // Used for REST Api (server fetching e.g. GET, POST)
import history from './history.js'; // Used for navigation (pushing to other pages)
import './home.css';
// - - >  SLIDESHOW IMAGES
import Vaccine1 from './Images/vacc1.jpeg';
import Vaccine3 from './Images/vac33.jpg';
//- - > IMAGES / VECTORS
import { ReactComponent as Syringe } from './Images/syringe-solid.svg';
import { ReactComponent as City } from './Images/city-solid.svg';
import { ReactComponent as Hazard } from './Images/biohazard-solid.svg'; 
import { ReactComponent as Question } from './Images/question-circle-regular.svg';
import { ReactComponent as Chart } from './Images/chart-line-solid.svg';
import { ReactComponent as File } from './Images/file-medical-solid.svg';
import { ReactComponent as Virus } from './Images/virus-solid.svg'; 
import { ReactComponent as Comment } from './Images/comment-medical-solid.svg';

// - - > On startup setup for the vaccine app
var InitializeHomeFonts = () => { // Importing fonts from googleapis (very cool method instead of downloading fonts)
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

// - - > Prime Components (possibly repeatable frontend components)
var HomeNavBar = () => {
    return(
        <div className="home-nav-bar">
            <Syringe className="syringe-vector" />
            <span className="vacctrack-title">VaccTrack.ph</span>
        </div>
    );
}

var ImageFrontLiner1 = () => {
    return(
        <div className="front-liner-image"></div>
    );
}

var MastText = () => {
    return(
        <div>
            <span className="first-prime-text">Envisioning a <span className="changing-color-text">COVID-free</span> society</span>
            <span className="shadow">Envisioning a COVID-free society</span>
            <span className="first-sub-text">By students. For the people.</span>
            <span className="sub-text-shadow">By students. For the people.</span>
        </div>
    );
}

var FirstConic = () => {
    return(
        <div className="first-cone"></div>
    );
}

// - - > MAIN POPULATION BOX PORTION
function citiesPage(){ // !NOTE: Push to Cities page
    alert("CITIES PAGE IS ALERTED!!!");
}

var PopCountBox = () => { // Green Background
    return(
        <div className="middle-green-box"></div>
        
    );
}

var mmPopCount;
var PopMain = () => { // White Box
    return(
        <div className="middle-box">
            <City className="city-vector" />
            <span className="population-count-text">Population Count</span>
            <span className="metro-manila-population">Metro Manila Population</span>
            <span className="population-num">{mmPopCount}</span>
            <span className="inhabitants-middle">Inhabitants</span>
            <span className="cities-note">For brief overview of the cities of Metro Manila, refer to cities.</span>
            <button className="cities-button" onClick={() => citiesPage()}>CITIES</button>
        </div>
    );
}

// - - > UNVACCINATED BOX PORTION
var UnvaccinatedBox = () => { // Green Background
    return(
        <div className="right-bg-box"></div>
    );
}

var unvaccinatedNum;
var UnvaccinatedMain = () => { // White Background
    return(
        <div className="right-top-box">
            <Hazard className="biohazard-vector" />
            <span className="unvaccinated-head-text">Unvaccinated Count</span>
            <span className="unvaccinated-sub-text">Metro Manila Population</span>
            {/*This should be a Dynamic Counter*/}
            <span className="unvaccinated-count-text">{unvaccinatedNum}</span> 
            <span className="inhabitants-rightbox">Inhabitants</span>
            <span className="datadisplayed-right">Data displayed are gathered from real tests reflecting our servers.</span>
            <Question className="question-right" />
        </div>
    );
}

// - - > VACCINATED BOX PORTION
var VaccinatedBox = () => { // Green Background
    return(
        <div className="left-bg-box"></div>
    );
}

var vaccinatedNum;
var VaccinatedMain = () => {
    return(
        <div className="left-top-box">
            <Chart className="chart-vector" />
            <span className="vaccinated-head-text">Vaccination Count</span>
            <span className="vaccinated-sub-text">Metro Manila Population</span>
            {/*THIS SHOULD BE A DYNAMIC COUNTER*/}
            <span className="vaccinated-count-text">{vaccinatedNum}</span>
            <span className="inhabitants-left-box">Inhabitants</span>
            <span className="data-displayed-left">Data displayed are gathered from real tests reflecting our servers.</span>
            <Question className="question-mark-left" />
        </div>
    );
}

// - - > SLIDESHOW IMAGE PORTION
var Slideshow = () => {
    return(
        <div>
            <img id="first-image" className="slide-show-image" src={Vaccine1} alt="vaccine 1" />
            <img id="second-image" className="slide-show-image w3-animate-fading" src={Vaccine3} alt="vaccine 3" />
            <span className="slide-show-text">A reliable and precise vaccination tracker for patients, frontliners, and doctors everywhere. We aim to provide accurate to numbers in support to eradicating pandemics.</span>
            <Virus className="virus-vector" />
            <hr className="second-green-line" />
        </div>
    );  
}

// - - > SEARCH A PATIENT DIVISION
var SearchPatientBG = () => {
    return(
        <div className="bg-search-box">
            <div className="bg-search-box-overlay">
                <span className="age-label">Age:</span>
                <span className="city-residence-label">City of Residence:</span>
                <span className="date-vacc">Date of Vaccination:</span>
                <span  className="vacc-brand-label">Vaccine Brand:</span>
                <span className="vacc-code-label">Vaccine Code:</span>
            </div>
        </div>
    );  
}

var SearchPatientHead = () => {
    return(
        <div>
            <span className="search-patient-label">Search A Patient</span>
            <span className="search-patient-label-border">Search A Patient</span>
            <Comment className="comment-vector" />
            <span className="search-patient-subtext">Enter your patient code to commence search</span>
        </div>
    );
}

export default class HomePage extends React.Component{
    // - - > ON CLIENT STARTUP
    constructor(props){
        super(props);
        this.state = {
            apiResponse: '',
            mmPopulation: 1000000000,
            unvaccinatedCount: 1000000000,
            vaccinatedCount: 1000000000,
            patientSearch: '',
        }
        // - - > EVENT HANDLING VARIABLES
        this.handleAboutUs = this.handleAboutUs.bind(this);
        this.handleInventory = this.handleInventory.bind(this);
        this.handleInputPatient = this.handleInputPatient.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchField = this.handleSearchField.bind(this);
    }
    componentDidMount(){
        document.title = "VaccTrack.ph";
        this.callAPI();
    }
    callAPI(){ // Testing on-startup backend server connectivity
        axios.get(`http://localhost:9000/testApi`)
        .then((response) => {
            let data = response.data;
            this.setState({apiResponse: data});
        });
    }

    // - - > BUTTON ONCLICK LISTENERS
    handleAboutUs(event){ // Push to About Us Page
        alert("CLICKED ABOUT US!");
    }

    handleInventory(event){ // Push to Inventory Page
        alert("CLICKED INVENTORY!");
    }

    handleInputPatient(event){ // Push to Input Patient Page
        history.push({
            pathname: '/login',
            search: '?query=loginPage',
        });
    }

    handleSearchField(event){
        this.setState({patientSearch: event.target.value});
    }

    handleSubmit(event){ // Search Patient Button handler
        alert(`Search Patient -> ${this.state.patientSearch}`);   
        this.setState({patientSearch: ''});
             
    }

    render(){
        // - - > PASS THE COUNT TO GLOBAL VARIABLE
        return(
            <div>
                {/*INITIALIZE FONTS PORTION -> Head*/}
                <InitializeHomeFonts />
                {/*HOME PAGE PORTION -> Body*/}
                <HomeNavBar />
                <button className="about-us-button" onClick={() => this.handleAboutUs()}>About Us</button>
                <button className="inventory-button" onClick={() => this.handleInventory()}>Inventory</button>
                <ImageFrontLiner1 />
                <MastText />
                <FirstConic />
                {/*Input Patient Section*/}
                <File className="file-vector" />
                <button className="input-patient-button" onClick={() => this.handleInputPatient()}>Input Patient</button>
                {/*INITIALIZE COUNTER VALUES*/}
                    {mmPopCount = this.state.mmPopulation}
                    {unvaccinatedNum = this.state.unvaccinatedCount}
                    {vaccinatedNum = this.state.vaccinatedCount}
                {/*THREE BOXES -> MIDDLE*/}
                <div className="middle-portion">
                    <PopCountBox />
                    <PopMain />
                </div>
                {/*RIGHT BOX -> UNVACCINATED*/}
                <div className="right-portion">
                    <UnvaccinatedBox />
                    <UnvaccinatedMain />
                </div>
                {/*LEFT BOX -> VACCINATED*/}
                <div className="left-portion">
                    <VaccinatedBox />
                    <VaccinatedMain />
                </div>
                {/*First line break - Home Page*/}
                <hr className="first-green-line" />
                <Slideshow />
                {/*SEARCH A PATIENT Division*/}
                <SearchPatientHead />
                <form onSubmit={this.handleSubmit} method='POST'>
                    <div className="search-field">
                        <input type="text" placeholder="Patient Code" value={this.state.patientSearch} onChange={this.handleSearchField} />
                    </div>
                    <input type="submit" value="Submit" className="search-button" />
                </form>
                <SearchPatientBG />

                <p className="testString">{this.state.apiResponse}</p>
            </div>
        );
    }
}