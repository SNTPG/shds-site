import React from 'react';
import {emotes} from '../assets/index.js';

function ChapMug({character}){
    return(
        <img className={"chapMug " + character} src={emotes[character]} alt=""></img>
    )
} export default ChapMug;