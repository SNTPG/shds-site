import React, {useState} from 'react';
import StudentMug from '../components/StudentMug.js';
import Inventory from '../components/Inventory.js';
import {bioData} from '../components/Card.js';

function Stats(props) {
    
    const [card, setCard] = useState(null);
    
    function closeCard(){
        setTimeout(function() {
            console.log("FUCK");
        }, 1000)
        var cover = document.getElementById("castCover");
        cover.classList.toggle("active");
        setCard(null);
    }

    function loadCard(character) {
        var cover = document.getElementById("castCover");
        cover.classList.toggle("active");
        setCard(<Inventory char={character} onClick={() => closeCard()}/>);
    }

    const students = bioData.filter(x => (x.name !== "matsuno" && x.name !== "simon" && x.name !== "gaz"));
    var bars = students.map((char) =>
            <button key={char.name} className={"statContainer "+ char.name} id={char.name+"Container"} onClick={() => loadCard(char.name)}>
                <StudentMug character={char.name}/>
                <div className={"charLevel " + char.name} id={char.name+"Level"}>
                    <div className={"levelBar " + char.name} id={char.name+"LevelBar"} style={{width:(char.xp - ((((char.level)*(char.level + 1)/2)-1)*10))/((char.level+1)*10)*100+"%"}}/>
                    <div className="levelText">
                        <p>{"LEVEL "+char.level}</p>
                    </div>
                </div>
            </button>
        );
    return(
        <div id ="statsOverlay">
            <div id="statsGrid">
                {bars}
            </div>
            {card}
            <div id="castCover"/>
        </div>
    );
} export default Stats;

//char.achievements.filter()

// Do this shit for auto XP calculation later