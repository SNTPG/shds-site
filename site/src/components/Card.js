import React from 'react';
import Heart from '../assets/decor/heart.png';
import Portrait from './Portrait.js';

function Card(props){
    return(
        <div id="idcard">
            <div id="idfront">
                <div id="idheader">
                    <img id="idlogo" src={Heart} alt=""></img>
                    <h1>{props.name}</h1>
                </div>
                <div id="iddata">
                    <Portrait character={props.character}/>
                    <div class="grid-container">
                        <div class="statsheader">STATS</div>
                        <div class="idtitle">TITLE</div>  
                        <div class="statsphys">PHYS</div>
                        <div class="idgeo">GEO</div>
                        <div class="statsmental">MENTAL</div>
                        <div class="idbio1">BIO1</div>
                        <div class="idbio2">BIO2</div>
                        <div class="statsmurder">MURDER</div>
                        <div class="idlikes">LIKES</div>
                        <div class="iddislikes">DISLIKES</div>
                    </div>
                </div>
                <div id="idfooter">
                    
                </div>
            </div>
            <div id="idback">
                <div id="bioheader"><h1>PUBLIC BIO</h1></div>
                <div id="bio"></div>
            </div>
        </div>
    )
} export default Card;