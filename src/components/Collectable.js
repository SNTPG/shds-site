import React from 'react';

const aliases = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "-1", "↋0"];

function Collectable(props){
    const indices = Array.from(Array(24).keys());
    const gacha = indices.map((num) =>
        <div style={{"grid-area": `${"c"+String(num).padStart(2, '0')}`}} key={num} className={"collectableItem "+( (Number.isInteger(props.collectables.find((x => x === num)))) ? "found " : "notFound ") + ( (Number.isInteger(props.actualCollectables.find((x => x === num)))) ? "possessed" : "notPossessed")} id={"collectable"+aliases[num]} >
            <p>{aliases[num]}</p>
        </div>
    );
    
    return(
        <div id="collectableGrid">
            {gacha}
        </div>
    )
} export default Collectable;