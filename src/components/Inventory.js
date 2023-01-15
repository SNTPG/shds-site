import React, {useState} from 'react';
import Close from '../assets/decor/close.png';
import Flip from '../assets/decor/flipArrow.png';
import {bioData} from '../components/Card.js';
import Achievements from './Achievements.js';
import Gacha from './Gacha.js';
import Collectable from './Collectable.js';

function Inventory(props){
    function flipCard(e) {
        e.preventDefault(); 
        var element = document.getElementById("statcard");
        element.classList.toggle("flipped");
    }
    const info = bioData.find(x => x.name === props.char);

    const [tab, setTab] = useState(<Achievements achievements={info.achievements} tab="easy"/>)

    /*closeCard(character){
        var square = document.getElementById(character+"Square")
        square.classList.toggle("clicked");
        square.classList.toggle("loadOut");
        setTimeout(function() {
            square.classList.toggle("loadOut");
        }, 1000)
        var cover = document.getElementById("castCover");
        cover.classList.toggle("active");
        this.setState({card: ""});
    }*/
    function loadTab(type) {
        var button = document.getElementById("easyButton");
        button.classList.remove("active");
        button = document.getElementById("hardButton");
        button.classList.remove("active");
        button = document.getElementById("storyButton");
        button.classList.remove("active");

        button = document.getElementById(type+"Button");
        button.classList.add("active");
        setTab(<Achievements achievements={info.achievements} tab={type}/>);
    }

    return(
        <div id="statcard" className={props.char}>
            <div id="statflip">
                <div id="statfront">
                    <div id="statheader">
                        <h1>{"Achievements - "+info.username}</h1>
                    </div>
                    <div id="stattabs">
                        <div id="stattabbar">
                            <button class="tabButton active" id="easyButton" onClick={() => loadTab("easy")}>Easy</button>
                            <button class="tabButton" id="hardButton" onClick={() => loadTab("hard")}>Difficult</button>
                            <button class="tabButton" id="storyButton" onClick={() => loadTab("story")}>Story</button>
                        </div>
                        <div id="statfield">
                            {tab}
                        </div>
                    </div>
                    <button class="flipButton" id="flipButtonFront" onClick={flipCard}>
                        <img src={Flip} alt="Flip card."/>
                    </button>
                    <button id="closeButtonFront" onClick={props.onClick}>
                        <img alt="Close." src={Close}/>
                    </button>
                </div>
                <div id="statback">
                    <div id="invheader"><h1>Inventory</h1></div>
                    <div id="itemarrays">
                        <div id="gachaWrapper">
                            <h2>Gacha Items</h2>
                            <Gacha gacha={info.gacha}/>
                        </div>
                        <div id="itemSpacer"/>
                        <div id="collectableWrapper">
                            <h2>Collectable Items</h2>
                            <Collectable collectables={info.collectables}/>
                        </div>
                    </div>
                    <button class="flipButton" id="flipButtonBack" onClick={flipCard}>
                        <img src={Flip} alt="Flip card."/>
                    </button>
                    <button id="closeButtonBack" alt="Close." onClick={props.onClick}>
                        <img alt="Close." src={Close}/>
                    </button>
                </div>
            </div>
        </div>
    )
} export default Inventory;