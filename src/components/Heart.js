import React from 'react';
import Full from '../assets/decor/fullheart.png'
import Outline from '../assets/decor/outlineheart.png'

function Heart(props){
    var heart = <div></div>;
    if(props.achievements.find((x => x === props.achievement))){
        heart = Full;
    } else {
        heart = Outline;
    }
    return (
        <img src={heart}/>
    )
} export default Heart;