import React from 'react';
import {apps} from '../assets/index.js';

function AppIcon({app}){
    return(
        <img className={"appIcon " + app} src={apps[app]} alt=""></img>
    )
} export default AppIcon;