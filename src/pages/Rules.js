import React from 'react';
import Flip from '../assets/decor/flipArrow.png';

function Rules(props) {
    function flipCard(e) {
        e.preventDefault();
        var element = document.getElementById("rulecard");
        element.classList.toggle("flipped");
    }
    return(
        <div id ="rulesOverlay">
            <div id="rulecard">
                <div id="ruleflip">
                    <div id="rulefront">
                        <div>
                            <div id="ruleheader"><h1>House Rules</h1></div>
                            <div className='rules'>
                                <ol id="houseRules">
                                    <li>You are to stay in the Dream Simulator until you die.</li>
                                    <li>Do not hurt Matsuno! She’s only trying to help. If you need her, you can summon her any time by calling out loud or through the group chat.</li>
                                    <li>Please stay in the readily available unlocked areas. If you try to access an inaccessible location, your safety can’t be guaranteed.</li>
                                    <li>Don’t steal or use anyone’s tablet without their permission! I will be very sad.</li>
                                    <li>Killing is strictly disallowed.</li>
                                    <ol id="killingRules" type='a'>
                                        <li>In the event that someone is killed, all enrichment activities will be immediately suspended.</li>
                                        <li>After such, an investigation of the crime will be held. After this, an open-forum trial will be held in an attempt to identify the culprit.</li>
                                        <li>If the culprit confesses to their crime, or is correctly identified by the rest of the cast, they will be rehabilitated by punishment.</li>
                                        <li>If the culprit eludes detection throughout the course of the trial without repentance, they will be ejected for the good of the whole. The remaining cast will be gently punished for not keeping a closer eye on them.</li>
                                        <li>In the event that a culprit has killed more than two people, they will be forcibly ejected without any trial.</li>
                                    </ol>
                                    <li>New rules can be patched in for balance reasons at any time.</li>
                                    <li>Matsuno is in charge of enforcing these rules.</li>
                                    <li>Most importantly… have fun!</li>
                                </ol><br/>
                            </div>
                        </div>
                        <button class="flipButton" id="flipButtonFront" onClick={flipCard}>
                            <img src={Flip} alt="Flip card."/>
                        </button>
                    </div>
                    <div id="ruleback">
                        <div>
                            <div id="ruleheader"><h1>Mechanics</h1></div>
                            <div className='mechs'>
                                <ul id="mechanics">
                                    <li><b>Achievements</b> are visible on your tablet, with new ones being regularly added. Easy achievements are worth 1 XP, Quest achievements are worth 5 XP, and Difficult achievements are worth 10 XP. Collect achievements to level up! You can collect each achievement once.</li>
                                    <li><b>Leveling up</b> grants you many benefits! Every new level you get tokens, every other new level you get an additional stat point you can allocate, and finally, every fifth level you get a mystery feature.</li>
                                    <li><b>Collectables</b> can be found by investigating the area around you. They can be exchanged 1 to 1 for tokens.</li>
                                    <li><b>Tokens</b> can be spent on items from the school store. The stock is limited, so don’t forget to spend!</li>
                                    <li><b>Commitment</b> is a serious thing! You can choose to ‘commit’ with someone you trust, thus pooling your resources. Breaking an established commitment comes with a penalty.</li>
                                    <ul id="commitRules">
                                        <li>You share a level, and XP you as individuals learn go to that one level.</li>
                                        <li>You also share a token bank.</li>
                                        <li>You can use each other’s game features.</li>
                                        <li>You get your own dorm room, with a lock, and a surprise inside.</li>
                                        <li>You get a private chat with just you two (and Matsuno!)</li>
                                        <li>Partners share no secrets. Full names and talents will be shared with each other, along with any other applicable information.</li>
                                        <li>Partners share fates. If one is ejected from paradise, so is the other. If one is rehabilitated, so is the other.</li>
                                    </ul>
                                </ul><br/>
                            </div>
                        </div>
                        <button class="flipButton" id="flipButtonBack" onClick={flipCard}>
                            <img src={Flip} alt="Flip card."/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} export default Rules;