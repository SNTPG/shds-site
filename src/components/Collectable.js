import React from 'react';

function Collectable(props){
    const indices = Array.from(Array(16).keys());
    const gacha = indices.map((num) =>
        <div style={{"grid-area": `${"c"+String(num).padStart(2, '0')}`}} key={num} className={"collectableItem "+( (Number.isInteger(props.collectables.find((x => x === num)))) ? "found " : "notFound ") + ( (Number.isInteger(props.actualCollectables.find((x => x === num)))) ? "possessed" : "notPossessed")} id={"collectable"+String(num).padStart(2, '0')} >
            <p>{String(num).padStart(2, '0')}</p>
        </div>
    );
    
    return(
        <div id="collectableGrid">
            {gacha}
        </div>
    )
} export default Collectable;