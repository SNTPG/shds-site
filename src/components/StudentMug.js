import React from 'react';
import {emotes} from '../assets/index.js';

function StudentMug({character}){
    /*if(character === "isaak") {
        return(
            <div className="isaakWrapper">
                <img className={"studentMug wolfe quantumTwo"} src={emotes["wolfe"]} alt=""></img>
                <img className={"studentMug isaak quantumOne"} src={emotes["isaak"]} alt=""></img>
            </div>
        )
    }*/
    return(
        <img className={"studentMug " + character} src={emotes[character]} alt=""></img>
    )
} export default StudentMug;