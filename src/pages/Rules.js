import {useRef, React} from 'react';
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
                                    <li>You are to stay in the Dream Simulator <span id="ruleImportant">until you die.</span> Henceforth, you are all participants in a <span id="ruleImportant">game of mutual killing.</span></li>
                                    <li>If you try to hurt me, <span id="ruleImportant">I will gut you like a fish.</span></li>
                                    <li>Stay in the <span id="ruleImportant">unlocked areas.</span> If you try to access an unloaded location, you will <span id="ruleImportant">noclip through the floor,</span> and I will laugh as you fall to your death.</li>
                                    <li>If you use someone else's tablet without their express permission, you will be <span id="ruleImportant">executed on the spot.</span></li>
                                    <li><strike>Broken objects regenerate after a period of <span id="ruleImportant">twenty-four hours,</span> so don't fuck up your murder plans or else you're going to be in a really awkward spot.</strike></li>
                                    <li>The doors to the outside will lock at <span id="ruleImportant">midnight.</span> They will unlock again at <span id="ruleImportant">07:00 the next day.</span></li>
                                    <li><span id="ruleImportant">Killing is the only way to escape the simulation.</span></li>
                                    <ol id="killingRules" type='a'>
                                        <li>In the event that a student is murdered, the motive will be <span id="ruleImportant">immediately suspended.</span></li>
                                        <li>A student will be declared deceased when <span id="ruleImportant">three or more innocent parties</span> view the body.</li>
                                        <li>After such, an <span id="ruleImportant">investigation</span> of the crime will be held. After this, an <span id="ruleImportant">open-forum trial</span> will be held in an attempt to identify the culprit.</li>
                                        <li>If the culprit is <span id="ruleImportant">correctly identified</span> by the rest of the cast, they alone will be <span id="ruleImportant">executed.</span></li>
                                        <li>If the culprit eludes detection throughout the course of the trial, they will be <span id="ruleImportant">disconnected</span> from the simulation as a reward. The remaining cast will be <span id="ruleImportant">executed.</span></li>
                                    </ol>
                                    <li>The game of mutual killing will end when there remain <span>three or less students.</span></li>
                                    <li>These rules may not be comprehensive, so it is possible I will add more later.<span id="ruleImportant">I will add more later.</span></li>
                                    <li>I am the <span id="ruleImportant">judge, jury, and executioner.</span></li>
                                    <li>Killing <span id="ruleImportant">more than two students</span> per motive is punishable by <span id="ruleImportant">immediate execution.</span></li>
                                    <li>Killing <span id="ruleImportant">Yadama Yumeji</span> is punishable by <span id="ruleImportant">immediate execution.</span></li>
                                    <li>Rule 5 is <span id="ruleImportant">repealed.</span> The regenerative period for all items except death traps is now <span id="ruleImportant">168 hours.</span></li>
                                    <li>If an <span id="ruleImportant">Architect</span> asks you to do something in their official capacity as an Architect, you <span id="ruleImportant">must comply</span> or face <span id="ruleImportant">immediate execution.</span></li>
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
                                    <li><b><span id="ruleImportant">Artifacts of power</span></b> can be found by investigating the area around you. They can be exchanged 1 to 1 for tokens. If you amass <span id="ruleImportant">all nine</span> as a set, you will be granted a <span id="ruleImportant">boon.</span></li>
                                    <li><b><span id="ruleImportant">Tokens</span></b> can be spent on items from the <span id="ruleImportant">store</span>. These will assist you in your attempts to <span id="ruleImportant">murder</span> others.</li>
                                    <li>You can choose to <b><span id="ruleImportant">"commit"</span></b> with someone you trust. Breaking an established commitment is punishable by execution.</li>
                                    <ul id="commitRules">
                                        <li>Commited students share a <span id="ruleImportant">token bank.</span></li>
                                        <li>Committed students get their own <span id="ruleImportant">dorm room</span> with a lock and a digitized copy of their <span id="ruleImportant">luggage.</span></li>
                                        <li>Committed students get a <span id="ruleImportant">private chat</span> that does not lock at night.</li>
                                        <li>Committed students share <span id="ruleImportant">no secrets.</span> Full names and talents will be shared along with any other applicable information.</li>
                                        <li>Committed students share <span id="ruleImportant">verdicts</span> If one is executed, so is the other. If one is allowed to leave, so is the other.</li>
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

// Below is the broken ruleset code

/* function Rules(props) {
    function flipCard(e) {
        e.preventDefault();
        var elements = document.querySelectorAll(".rulecard");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            element.classList.toggle("flipped");
        }
    }
    const firstDivRef = useRef();
    const secondDivRef = useRef();
    const thirdDivRef = useRef();
    const fourthDivRef = useRef();
    const handleScrollFirst = scroll => {
        secondDivRef.current.scrollTop = scroll.target.scrollTop;
    };
    const handleScrollSecond = scroll => {
        firstDivRef.current.scrollTop = scroll.target.scrollTop;
    };
    const handleScrollThird = scroll => {
        fourthDivRef.current.scrollTop = scroll.target.scrollTop;
    };
    const handleScrollFourth = scroll => {
        thirdDivRef.current.scrollTop = scroll.target.scrollTop;
    };
    return(
        <div id ="rulesOverlay">
            <div className="rulecard cardLeft">
                <div id="ruleflip">
                    <div id="rulefront">
                        <div>
                        <div id="ruleheader">
                            <h1 className='glitch' data-text="House Rules">House Rules</h1>
                        </div>
                        <div className='rules' onScroll={handleScrollFirst} ref={firstDivRef}>
                            <ol id="houseRules">
                                <li>███ ███ ██ ████ ██ ███ █████ █████████ <span id="ruleImportant">█████ ███ ████</span></li>
                                <li><span id="ruleImportant">██ ███ ████ ████████</span> █████ ████ ██████ ██ █████ ██ ███ ████ ████ ███ ███ ██████ ███ ███ ████ ██ <span id="ruleImportant">███████ ███ ████</span> ██ ███████ ███ <span id="ruleImportant">█████ █████</span></li>
                                <li>██████ ████ ██ ███ ███████ <span id="ruleImportant">█████████ ████████ ██████</span> ██ ███ ███ ██ ██████ ██ ████████████ █████████ <span id="ruleImportant">████ ██████ █████ ██ ███████████</span></li>
                                <li><span id="ruleImportant">█████ █████</span> ██ ███ ████████ ██████ <span id="ruleImportant">███████ █████ ███████████</span> █ ████ ██ ████ ████</li>
                                <li>██ ███ █████ ██ ███████ ██ ███████ ██ ████ ████ <span id="ruleImportant">██ █████ ██ ███████████</span> ██████ ██ ████████</li>
                                <li>███ █████ ██ ███ ███████ ████ ████ ██ <span id="ruleImportant">█████████</span> ███ ███ █████ ████ ████ ██████ ██ ██████ ████████ ███ ███ █████ ████ ███ ████████ █████ ████ █████ ████ ████ ██████ █████ ██ <span id="ruleImportant">██████</span></li>
                                <li><span id="ruleImportant">███████ ██ ████████ ███████████</span></li>
                                <ol id="killingRules" type='a'>
                                    <li>██ ███ █████ ████ ███████ ██ ███████ ███ ██████████ ██████████ ████ ██ <span id="ruleImportant">███████████ ██████████</span></li>
                                    <li>█████ █████ ██ <span id="ruleImportant">█████████████</span> ██ ███ █████ ████ ██ █████ █████ █████ ██ <span id="ruleImportant">███████████ █████</span> ████ ██ ████ ██ ██ ███████ ██ ████████ ███ ████████</li>
                                    <li>██ ███ ███████ <span id="ruleImportant">█████████</span> ██ █████ ██████ ██ ██ █████████ <span id="ruleImportant">██████████</span> ██ ███ ████ ██ ███ █████ ████ ████ ██ <span id="ruleImportant">█████████████</span> ██ ███████████</li>
                                    <li>██ ███ ███████ ██████ █████████ ██████████ ███ ██████ ██ ███ █████ <span id="ruleImportant">███████ ██████████</span>█ ████ ████ ██ <span id="ruleImportant">███████</span> ███ ███ ████ ██ ███ ██████ ███ █████████ ████ ████ ██ <span id="ruleImportant">██████ ████████</span> ███ ███ ███████ █ ██████ ███ ██ █████</li>
                                    <li>██ ███ █████ ████ █ ███████ ███ ██████ ████ ████ ███ ███████ ████ ████ ██ <span id="ruleImportant">████████ █████████████ ███████ ███ ██████</span></li>
                                </ol>
                                <li><span id="ruleImportant">███ █████</span> ███ ██ ███████ ██ ███ ███████ ███████ ██ ███ █████</li>
                                <li><span id="ruleImportant">███████</span> ██ ██ ██████ ██ █████████ █████ ██████</li>
                                <li>████ ██████████████ <span id="ruleImportant">████ ████</span></li>
                            </ol>
                            <br/>
                        </div>
                        </div>
                        <button class="flipButton" id="flipButtonFront" onClick={flipCard}>
                        <img src={Flip} alt="Flip card."/>
                        </button>
                    </div>
                    <div id="ruleback">
                        <div>
                        <div id="ruleheader">
                            <h1 className='glitch' data-text="Mechanics">Mechanics</h1>
                        </div>
                        <div className='mechs' onScroll={handleScrollFourth} ref={fourthDivRef}>
                            <ul id="mechanics">
                                <li><b><span id="ruleImportant">████████████</span></b> ███ ███████ ██ ████ ███████ ████ ███ ████ █████ █████████ ██████ <span id="ruleImportant">████ ████████████</span> ███ █████ █ ███ <span id="ruleImportant">█████ ████████████</span> ███ █████ █ ███ ███ <span id="ruleImportant">█████████ ████████████</span> ███ █████ ██ ███ ███████ ████████████ ██ █████ ███ ███ ███ ███████ ████ ███████████ █████</li>
                                <li><b><span id="ruleImportant">████████ ██</span></b> ██████ ███ ████ █████████ █████ ███ █████ ███ ███ ███████ █████ █████ ███ █████ ███ ███ ██ <span id="ruleImportant">██████████ ████ █████</span> ███ ███ █████████ ███ ████████ █████ █████ █████ ███ ███ █ <span id="ruleImportant">███████ ████████</span></li>
                                <li><b><span id="ruleImportant">████████████</span></b> ███ ██ █████ ██ █████████████ ███ ████ ██████ ████ ████ ███ ██ █████████ █ ██ █ ███ <span id="ruleImportant">███████</span></li>
                                <li><b><span id="ruleImportant">██████</span></b> ███ ██ █████ ██ █████ ████ ███ <span id="ruleImportant">██████ █████</span>█ ███ █████ ██ <span id="ruleImportant">███████</span>█ ██ █████ ██████ ██ ██████</li>
                                <li><b><span id="ruleImportant">██████████</span></b> ██ █ ███████ ██████ ███ ███ ██████ ██ █████████ ████ ███████ ███ ██████ ████ ███████ ████ ██████████ ████████ ██ ███████████ ██████████ █████ ████ █ <span id="ruleImportant">████████</span></li>
                                <ul id="commitRules">
                                    <li>███ <span id="ruleImportant">█████ █ █████</span>█ ███ ██ ███ ██ ███████████ █████ ██ ██ ████ ███ ██████</li>
                                    <li>███ ████ █████ █ <span id="ruleImportant">█████ █████</span></li>
                                    <li>███ ███ ███ ████ ███████ <span id="ruleImportant">████ █████████</span></li>
                                    <li>███ ███ ████ ███ ████ █████ ████ █ █████ ███ █ <span id="ruleImportant">████████</span> ███████</li>
                                    <li>███ ███ █ <span id="ruleImportant">███████ ████</span> ████ ████ ███ ███ █████ ██████████</li>
                                    <li>████████ █████ <span id="ruleImportant">██ ████████</span> ████ █████ ███ ███████ ████ ██ ██████ ████ ████ ██████ █████ ████ ███ █████ ██████████ ████████████</li>
                                    <li>████████ █████ <span id="ruleImportant">█████████</span> ██ ███ ██ ███████ ████ █████████ ██ ██ ███ ██████ ██ ███ ██ ██████████████ ██ ██ ███ ██████</li>
                                </ul>
                            </ul>
                            <br/>
                        </div>
                        </div>
                        <button class="flipButton" id="flipButtonBack" onClick={flipCard}>
                        <img src={Flip} alt="Flip card."/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="rulecard cardRight">
                <div id="ruleflip">
                    <div id="rulefront">
                        <div>
                        <div id="ruleheader">
                            <h1 className='glitch' data-text="House Rules">House Rules</h1>
                        </div>
                        <div className='rules' onScroll={handleScrollSecond} ref={secondDivRef}>
                            <ol id="houseRules">
                                <li>███ ███ ██ ████ ██ ███ █████ █████████ <span id="ruleImportant">█████ ███ ████</span></li>
                                <li><span id="ruleImportant">██ ███ ████ ████████</span> █████ ████ ██████ ██ █████ ██ ███ ████ ████ ███ ███ ██████ ███ ███ ████ ██ <span id="ruleImportant">███████ ███ ████</span> ██ ███████ ███ <span id="ruleImportant">█████ █████</span></li>
                                <li>██████ ████ ██ ███ ███████ <span id="ruleImportant">█████████ ████████ ██████</span> ██ ███ ███ ██ ██████ ██ ████████████ █████████ <span id="ruleImportant">████ ██████ █████ ██ ███████████</span></li>
                                <li><span id="ruleImportant">█████ █████</span> ██ ███ ████████ ██████ <span id="ruleImportant">███████ █████ ███████████</span> █ ████ ██ ████ ████</li>
                                <li>██ ███ █████ ██ ███████ ██ ███████ ██ ████ ████ <span id="ruleImportant">██ █████ ██ ███████████</span> ██████ ██ ████████</li>
                                <li>███ █████ ██ ███ ███████ ████ ████ ██ <span id="ruleImportant">█████████</span> ███ ███ █████ ████ ████ ██████ ██ ██████ ████████ ███ ███ █████ ████ ███ ████████ █████ ████ █████ ████ ████ ██████ █████ ██ <span id="ruleImportant">██████</span></li>
                                <li><span id="ruleImportant">███████ ██ ████████ ███████████</span></li>
                                <ol id="killingRules" type='a'>
                                    <li>██ ███ █████ ████ ███████ ██ ███████ ███ ██████████ ██████████ ████ ██ <span id="ruleImportant">███████████ ██████████</span></li>
                                    <li>█████ █████ ██ <span id="ruleImportant">█████████████</span> ██ ███ █████ ████ ██ █████ █████ █████ ██ <span id="ruleImportant">███████████ █████</span> ████ ██ ████ ██ ██ ███████ ██ ████████ ███ ████████</li>
                                    <li>██ ███ ███████ <span id="ruleImportant">█████████</span> ██ █████ ██████ ██ ██ █████████ <span id="ruleImportant">██████████</span> ██ ███ ████ ██ ███ █████ ████ ████ ██ <span id="ruleImportant">█████████████</span> ██ ███████████</li>
                                    <li>██ ███ ███████ ██████ █████████ ██████████ ███ ██████ ██ ███ █████ <span id="ruleImportant">███████ ██████████</span>█ ████ ████ ██ <span id="ruleImportant">███████</span> ███ ███ ████ ██ ███ ██████ ███ █████████ ████ ████ ██ <span id="ruleImportant">██████ ████████</span> ███ ███ ███████ █ ██████ ███ ██ █████</li>
                                    <li>██ ███ █████ ████ █ ███████ ███ ██████ ████ ████ ███ ███████ ████ ████ ██ <span id="ruleImportant">████████ █████████████ ███████ ███ ██████</span></li>
                                </ol>
                                <li><span id="ruleImportant">███ █████</span> ███ ██ ███████ ██ ███ ███████ ███████ ██ ███ █████</li>
                                <li><span id="ruleImportant">███████</span> ██ ██ ██████ ██ █████████ █████ ██████</li>
                                <li>████ ██████████████ <span id="ruleImportant">████ ████</span></li>
                            </ol>
                            <br/>
                        </div>
                        </div>
                        <button class="flipButton" id="flipButtonFront" onClick={flipCard}>
                        <img src={Flip} alt="Flip card."/>
                        </button>
                    </div>
                    <div id="ruleback">
                        <div>
                        <div id="ruleheader">
                            <h1 className='glitch' data-text="Mechanics">Mechanics</h1>
                        </div>
                        <div className='mechs' onScroll={handleScrollThird} ref={thirdDivRef}>
                            <ul id="mechanics">
                                <li><b><span id="ruleImportant">████████████</span></b> ███ ███████ ██ ████ ███████ ████ ███ ████ █████ █████████ ██████ <span id="ruleImportant">████ ████████████</span> ███ █████ █ ███ <span id="ruleImportant">█████ ████████████</span> ███ █████ █ ███ ███ <span id="ruleImportant">█████████ ████████████</span> ███ █████ ██ ███ ███████ ████████████ ██ █████ ███ ███ ███ ███████ ████ ███████████ █████</li>
                                <li><b><span id="ruleImportant">████████ ██</span></b> ██████ ███ ████ █████████ █████ ███ █████ ███ ███ ███████ █████ █████ ███ █████ ███ ███ ██ <span id="ruleImportant">██████████ ████ █████</span> ███ ███ █████████ ███ ████████ █████ █████ █████ ███ ███ █ <span id="ruleImportant">███████ ████████</span></li>
                                <li><b><span id="ruleImportant">████████████</span></b> ███ ██ █████ ██ █████████████ ███ ████ ██████ ████ ████ ███ ██ █████████ █ ██ █ ███ <span id="ruleImportant">███████</span></li>
                                <li><b><span id="ruleImportant">██████</span></b> ███ ██ █████ ██ █████ ████ ███ <span id="ruleImportant">██████ █████</span>█ ███ █████ ██ <span id="ruleImportant">███████</span>█ ██ █████ ██████ ██ ██████</li>
                                <li><b><span id="ruleImportant">██████████</span></b> ██ █ ███████ ██████ ███ ███ ██████ ██ █████████ ████ ███████ ███ ██████ ████ ███████ ████ ██████████ ████████ ██ ███████████ ██████████ █████ ████ █ <span id="ruleImportant">████████</span></li>
                                <ul id="commitRules">
                                    <li>███ <span id="ruleImportant">█████ █ █████</span>█ ███ ██ ███ ██ ███████████ █████ ██ ██ ████ ███ ██████</li>
                                    <li>███ ████ █████ █ <span id="ruleImportant">█████ █████</span></li>
                                    <li>███ ███ ███ ████ ███████ <span id="ruleImportant">████ █████████</span></li>
                                    <li>███ ███ ████ ███ ████ █████ ████ █ █████ ███ █ <span id="ruleImportant">████████</span> ███████</li>
                                    <li>███ ███ █ <span id="ruleImportant">███████ ████</span> ████ ████ ███ ███ █████ ██████████</li>
                                    <li>████████ █████ <span id="ruleImportant">██ ████████</span> ████ █████ ███ ███████ ████ ██ ██████ ████ ████ ██████ █████ ████ ███ █████ ██████████ ████████████</li>
                                    <li>████████ █████ <span id="ruleImportant">█████████</span> ██ ███ ██ ███████ ████ █████████ ██ ██ ███ ██████ ██ ███ ██ ██████████████ ██ ██ ███ ██████</li>
                                </ul>
                            </ul>
                            <br/>
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
} export default Rules; */