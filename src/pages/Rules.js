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
                                    <li>You are to stay in the Dream Simulator <span id="ruleImportant">until you die.</span></li>
                                    <li><span id="ruleImportant">Do not hurt Matsuno!</span> She’s only trying to help. If you need her, you can summon her any time by <span id="ruleImportant">calling out loud</span> or through the <span id="ruleImportant">group chat.</span></li>
                                    <li>Please stay in the readily <span id="ruleImportant">available unlocked areas.</span> If you try to access an inaccessible location, <span id="ruleImportant">your safety can’t be guaranteed.</span></li>
                                    <li><span id="ruleImportant">Don’t steal</span> or use anyone’s tablet <span id="ruleImportant">without their permission!</span> I will be very sad.</li>
                                    <li>If you break or destroy an object, it will take <span id="ruleImportant">24 hours to regenerate.</span> Please be careful!</li>
                                    <li>The doors to the outside will lock at <span id="ruleImportant">midnight.</span> You can still come back inside if you're outside, but you can't exit the building after this hour! They will unlock again at <span id="ruleImportant">7:00.</span></li>
                                    <li><span id="ruleImportant">Killing is strictly disallowed.</span></li>
                                    <ol id="killingRules" type='a'>
                                        <li>In the event that someone is killed, all enrichment activities will be <span id="ruleImportant">immediately suspended.</span></li>
                                        <li>After such, an <span id="ruleImportant">investigation</span> of the crime will be held. After this, an <span id="ruleImportant">open-forum trial</span> will be held in an attempt to identify the culprit.</li>
                                        <li>If the culprit <span id="ruleImportant">confesses</span> to their crime, or is correctly <span id="ruleImportant">identified</span> by the rest of the cast, they will be <span id="ruleImportant">rehabilitated</span> by punishment.</li>
                                        <li>If the culprit eludes detection throughout the course of the trial <span id="ruleImportant">without repentance</span>, they will be <span id="ruleImportant">ejected</span> for the good of the whole. The remaining cast will be <span id="ruleImportant">gently punished</span> for not keeping a closer eye on them.</li>
                                        <li>In the event that a culprit has killed more than two people, they will be <span id="ruleImportant">forcibly rehabilitated without any trial.</span></li>
                                    </ol>
                                    <li><span id="ruleImportant">New rules</span> can be patched in for balance reasons at any time.</li>
                                    <li><span id="ruleImportant">Matsuno</span> is in charge of enforcing these rules.</li>
                                    <li>Most importantly… <span id="ruleImportant">have fun!</span></li>
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
                                    <li><b><span id="ruleImportant">Achievements</span></b> are visible on your tablet, with new ones being regularly added. <span id="ruleImportant">Easy achievements</span> are worth 1 XP, <span id="ruleImportant">story achievements</span> are worth 5 XP, and <span id="ruleImportant">difficult achievements</span> are worth 10 XP. Collect achievements to level up! You can collect each achievement once.</li>
                                    <li><b><span id="ruleImportant">Leveling up</span></b> grants you many benefits! Every new level you get tokens, every other new level you get an <span id="ruleImportant">additional stat point</span> you can allocate, and finally, every fifth level you get a <span id="ruleImportant">mystery feature.</span></li>
                                    <li><b><span id="ruleImportant">Collectables</span></b> can be found by investigating the area around you. They can be exchanged 1 to 1 for <span id="ruleImportant">tokens.</span></li>
                                    <li><b><span id="ruleImportant">Tokens</span></b> can be spent on items from the <span id="ruleImportant">school store</span>. The stock is <span id="ruleImportant">limited</span>, so don’t forget to spend!</li>
                                    <li><b><span id="ruleImportant">Commitment</span></b> is a serious thing! You can choose to ‘commit’ with someone you trust, thus pooling your resources. Breaking an established commitment comes with a <span id="ruleImportant">penalty.</span></li>
                                    <ul id="commitRules">
                                        <li>You <span id="ruleImportant">share a level</span>, and XP you as individuals learn go to that one level.</li>
                                        <li>You also share a <span id="ruleImportant">token bank.</span></li>
                                        <li>You can use each other’s <span id="ruleImportant">game features.</span></li>
                                        <li>You get your own dorm room, with a lock, and a <span id="ruleImportant">surprise</span> inside.</li>
                                        <li>You get a <span id="ruleImportant">private chat</span> with just you two (and Matsuno!)</li>
                                        <li>Partners share <span id="ruleImportant">no secrets.</span> Full names and talents will be shared with each other, along with any other applicable information.</li>
                                        <li>Partners share <span id="ruleImportant">verdicts.</span> If one is ejected from paradise, so is the other. If one is rehabilitated, so is the other.</li>
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