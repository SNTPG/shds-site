import React from 'react';
import images from '../assets/index.js';

function Portrait({character}){
    return(
        <img id="idportrait" src={images[character-1]} alt=""></img>
    )
} export default Portrait;