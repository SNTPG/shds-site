import React from 'react';
import images from '../assets/index.js';

function Portrait({character}){
    /*if(character === "isaak") {
        return(
            <span className="isaakWrapper">
                <img className='wolfe quantumTwo' id="idportrait" src={images["wolfe"]} alt=""></img>
                <img className='isaak quantumOne' id="idportrait" src={images["isaak"]} alt=""></img>
            </span>
        )
    }*/
    return(
        <img id="idportrait" src={images[character]} alt=""></img>
    )
} export default Portrait;