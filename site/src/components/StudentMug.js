import React from 'react';
import {emotes} from '../assets/index.js';

function StudentMug({character}){
    return(
        <img className={"studentMug " + character} src={emotes[character]} alt=""></img>
    )
} export default StudentMug;