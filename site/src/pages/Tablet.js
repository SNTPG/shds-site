import React from 'react';
import Landing from './Landing.js';
import Cast from './Cast.js';
import Map from './Map.js';
import TemplateApp from './TemplateApp.js';

class Tablet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {app : null};
        this.openCast = this.openCast.bind(this);
        this.openMap = this.openCast.bind(this);
    }
    goHome(){
        console.log("Going home!");
        var element = document.getElementById("activeApp");
        element.classList.remove("loading");
        element.classList.add("return");
        setTimeout(() => {
            element.classList.remove("inUse");
            this.setState({app: null});
        }, 250);
    }
    openCast(){
        console.log("Opening cast!");
        var element = document.getElementById("activeApp");
        element.classList.remove("loading");
        element.classList.remove("return");
        element.classList.add("inUse");
        element.classList.add("loading");
        this.setState({app: <Cast/>});
    }
    openMap(){
        console.log("Opening map!");
        var element = document.getElementById("activeApp");
        element.classList.remove("loading");
        element.classList.remove("return");
        element.classList.add("inUse");
        element.classList.add("loading");
        this.setState({app: <Map/>});
    }
    openGeneric(app){
        console.log("Opening textbox!");
        var element = document.getElementById("activeApp");
        element.classList.remove("loading");
        element.classList.remove("return");
        element.classList.add("inUse");
        element.classList.add("loading");
        this.setState({app: <TemplateApp description={app}/>});
    }

    funcList = {
        "Contacts": this.openCast.bind(this), 
        "Map": this.openMap.bind(this), 
        "Stats": this.openGeneric.bind(this), 
        "Settings": this.openGeneric.bind(this), 
        "Rules": this.openGeneric.bind(this), 
        "Chatroom": this.openGeneric.bind(this), 
        "Notepad": this.openGeneric.bind(this), 
        "Camera": this.openGeneric.bind(this), 
        "Recorder": this.openGeneric.bind(this), 
    };

    render() {

        return(
            <div id ="tablet">
                <div id="tabletWrapper">
                    <div id="tabletCamera">
                        <div id="tabletLens"/>
                    </div>
                    <div id="tabletScreen">
                        <Landing functions={this.funcList}/>
                        <div id="activeApp">
                            {this.state.app}
                        </div>
                    </div>
                    <div id="buttonRadius"></div>
                    <button id="homeButton" onClick={() => this.goHome()}></button>
                    <div id="tabletHome"></div>
                </div>
            </div>
        )
    }
} export default Tablet;