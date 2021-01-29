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
import { ReactComponent as Note } from './Images/notes-medical-solid.svg';

// - - > On startup setup for the vaccine app
var InitializeHomeFonts = () => { // Importing fonts from googleapis (very cool method instead of downloading fonts)
    return(
        <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css 2?family=Public+Sans:wght@300;700&display=swap" rel="stylesheet"></link>
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
var patientAge, patientCity, vaccDate, vaccCode, vaccBrand, patientFound, vaccStat, status;
var foundPatient;
var SearchPatientBG = () => {
    let dynamicDescription;
    if(patientFound){
        if(vaccStat === "Vaccinated"){
            status = "Vaccinated";
            dynamicDescription = "Patient is vaccinated. Please wait for the vaccination to take into effect (approx. 72 hours upon injection). Still follow COVID-19 safety protocols to maximize immunity.";
        }else{
            status = "Unvaccinated";
            dynamicDescription = "Patient found to be unvaccinated. Please follow COVID-19 safety protocols and try to avail vaccination as soon as possible.";
        }
    }else{
        status = "Not Found";
        dynamicDescription = "Searching patient lead to database error. Individual is found to be unknown. Please avail the vaccination as soon as possible and remember to strictly comply with the COVID-19 protocols.";
    }

    return(
        <div className="bg-search-box">
            <div className="bg-search-box-overlay">
                {/*Box Left Side*/}
                <span className="age-label">Age:</span>
                <span className="city-residence-label">City of Residence:</span>
                <span className="date-vacc">Date of Vaccination:</span>
                <span  className="vacc-brand-label">Vaccine Brand:</span>
                <span className="vacc-code-label">Vaccine Code:</span>
                <div id="age-box-field">
                    <p className="display-data-format">{patientAge}yrs old</p>
                </div>
                <div id="city-res-field">
                    <p className="display-data-format">{patientCity}</p>
                </div>
                <div id="vacc-date-field">
                    <p className="display-data-format">{vaccDate}</p>
                </div>
                <div id="vacc-brand-field">
                    <p className="display-data-format">{vaccBrand}</p>
                </div>
                <div id="vacc-code-label">
                    <p className="display-data-format">{vaccCode}</p>
                </div>
                {/*Box Right Side*/}
                <div className="vertical-green-line"></div>
                <span className="patient-indicator-label">Patient Indicator:</span>
                <div className="unvacc-palette"></div>
                <div className="vacc-palette"></div>
                <div className="not-found-palette"></div>
                <div className="patient-status-box">
                    <Note className="medical-note-vector" />
                    <span className="status-label">Status:</span>
                    <p className="display-data-format"
                        style={{position: "absolute", left: 105}} >
                        {status}
                    </p>
                </div>
                {/*Description Box*/}
                <div className="description-box">
                    <span className="description-label">Description:</span>
                    <span className="description-text-format">{dynamicDescription}</span>
                </div>
            </div>
            <span className="search-patient-disclaimer">*Patient's data is safely stored for privacy*</span>
        </div>
    );  
}

var SearchPatientHead = () => {
    return(
        <div>
            <span className="search-patient-label">Search A Patient</span>
            <Comment className="comment-vector" />
            <span className="search-patient-subtext">Enter your patient code to commence search</span>
        </div>
    );
}

// - - > May use if Necessary (Still for Testing)
class PatientDetail{ // Patient Details Class
    constructor(city, date, age, code, brand, stat){
        this.city = city;
        this.date = date;
        this.age = age;
        this.code = code;
        this.brand = brand;
        this.stat = stat;
    }
    returnCity(){ // Return City value class method
        return this.city;
    }
}

// - - > Components below Patient Search Segment
var SecondConic = () => {
    return(
        <div className="second-cone"></div>
    );
}

var FrontLinerFooter = () => {
    return(
        <div>
            <div className="footer-image"></div>
            <span className="footer-main-text">More info about the creators in About Us</span>
            <span className="footer-shadow-text">More info about the creators in About Us</span>
        </div>
    );
}

var FooterBar = () => {
    return(
        <div className="footer-bar"></div>
    );
}

var vaccinationStatus;
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
            patientCity: '',
            vaccDate: '',
            patientAge: 0,
            vaccCode: '',
            vaccBrand: '',
            patientFound: false,
            vaccStat: ''
        }
        // - - > EVENT HANDLING VARIABLES
        this.handleAboutUs = this.handleAboutUs.bind(this);
        this.handleInventory = this.handleInventory.bind(this);
        this.handleInputPatient = this.handleInputPatient.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchField = this.handleSearchField.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // - - > Ref for Changing Color
        this.indicator = React.createRef(); // Used instead of document.getElementByID or .getElementByClass for ReactJS
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
        // - - > FOR TESTING ONLY! (Removed upon Dynamic Implementation)
        if(this.state.patientSearch !== ''){
            this.setState({patientFound: true});

            if(this.state.patientSearch === "Kyle Degrano"){
                this.setState({patientCity: 'Quezon City', vaccDate: '01-28-2021', vaccCode: '01XX2021', vaccBrand: 'Sinovac', patientAge: 20});
                vaccinationStatus = "Unvaccinated";
                this.setState({vaccStat: vaccinationStatus});    
            }else{
                this.setState({patientCity: 'Makati City', vaccDate: '01-30-2021', vaccCode: '01XX2021', vaccBrand: 'Pfizer', patientAge: 15});
                vaccinationStatus = "Vaccinated";
                this.setState({vaccStat: vaccinationStatus});
            }  

            if(vaccinationStatus === 'Vaccinated'){
                this.indicator.current.style.background = "#56CCF2";
            }else if(vaccinationStatus === "Unvaccinated"){
                this.indicator.current.style.background = "#A02B2B";
            }
        }else{
            this.setState({patientFound: false});
            this.indicator.current.style.background = "#9A9A9A";
        }

        event.preventDefault();
    }

    handleReset(event){ // Reset Button to Reset Inputs
        alert('Reset Button Clicked!');
        this.setState({patientSearch: '', patientCity: '', vaccDate: '', patientAge: 0, vaccCode: '', vaccBrand: '', vaccStat: '', patientFound: false});
        this.indicator.current.style.background = "white";
    }

    // - - > Data Initializer
    dataInitiate(){
        // - - > PASS Data TO GLOBAL VARIABLE
        foundPatient = new PatientDetail(this.state.patientCity, this.state.vaccDate, this.state.patientAge,
        this.state.vaccCode, this.state.vaccBrand, this.state.vaccStat);
        // - - > Utilize the Class (TEST)
        patientCity = foundPatient.returnCity();
        patientAge = foundPatient.age
        vaccDate = foundPatient.date;
        vaccCode = foundPatient.code;
        vaccBrand = foundPatient.brand;
        patientFound = this.state.patientFound;
        vaccStat = foundPatient.stat;
        // - - > Initialize Counter
        mmPopCount = this.state.mmPopulation;
        unvaccinatedNum = this.state.unvaccinatedCount;
        vaccinatedNum = this.state.vaccinatedCount;
    }

    render(){
        // - - > Calling Initiate Function
        this.dataInitiate();
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
                {/*THREE BOXES -> Manila Population*/}
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
                {/*method='POST'*/}
                <form onSubmit={this.handleSubmit}>
                    <div className="search-field">
                        <input type="text" placeholder="Patient Code" value={this.state.patientSearch} onChange={this.handleSearchField} />
                    </div>
                    <input type="submit" value="Submit" className="search-button" />
                </form>
                {/*Search Box Values*/}
                <div id="indicator" ref={this.indicator}></div>
                <SearchPatientBG />
                <button className="reset-button" onClick={() => this.handleReset()}>Reset</button>
                {/*After Search box */}
                <SecondConic />
                <FrontLinerFooter />
                <FooterBar />

                <p className="testString">{this.state.apiResponse}</p>
            </div>
        );
    }
}