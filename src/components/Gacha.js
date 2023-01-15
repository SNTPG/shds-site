import React from 'react';

function Gacha(props){
    const indices = Array.from(Array(100).keys());
    const gacha = indices.map((num) =>
        <div style={{"grid-area": `${"g"+String(num).padStart(2, '0')}`}} key={num} className={"gachaItem "+( (Number.isInteger(props.gacha.find((x => x === num)))) ? "found" : "notFound")} id={"gacha"+String(num).padStart(2, '0')} >
            <p>{String(num).padStart(2, '0')}</p>
        </div>
    );
    
    return(
        <div id="gachaGrid">
            {gacha}
        </div>
    )
} export default Gacha;