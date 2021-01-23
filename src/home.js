import React from 'react';
import axios from 'axios';
import history from './history.js';
import './home.css';
//- - > IMAGES
import { ReactComponent as Syringe } from './Images/syringe-solid.svg';
import { ReactComponent as City } from './Images/city-solid.svg';

var InitializeHomeFonts = () => {
    return(
        <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"></link>
        </head>
    );
}

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
            <span className="first-prime-text">Envisioning a COVID-free society</span>
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

// - - > MIDDLE BOX
var PopCountBox = () => {
    return(
        <div className="middle-green-box"></div>
    );
}
var PopMain = () => {
    return(
        <div className="middle-box">
            <City className="city-vector" />
            <span className="population-count-text">Population Count</span>
            <span className="metro-manila-population">Metro Manila Population</span>
        </div>
    );
}

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            apiResponse: '',
        }
        // - - > EVENT HANDLING VARIABLES
        this.handleAboutUs = this.handleAboutUs.bind(this);
        this.handleInventory = this.handleInventory.bind(this);
    }
    componentDidMount(){
        document.title = "VaccTrack.ph";
        this.callAPI();
    }
    callAPI(){
        axios.get(`http://localhost:9000/testApi`)
        .then((response) => {
            let data = response.data;
            this.setState({apiResponse: data});
        });
    }

    // - - > BUTTON ONCLICK LISTENERS
    handleAboutUs(event){
        alert("CLICKED ABOUT US!");
    }

    handleInventory(event){
        alert("CLICKED INVENTORY!");
    }

    render(){
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
                {/*THREE BOXES*/}
                <div className="middle-portion">
                    <PopCountBox />
                    <PopMain />
                </div>
                <p className="testString">{this.state.apiResponse}</p>
            </div>
        );
    }
}