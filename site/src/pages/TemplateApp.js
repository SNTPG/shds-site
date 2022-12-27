import React from 'react';

function TemplateApp({description}) {
    if(description===""){
        description = "This app is currently inaccessible."
    } 
    return(
        <div id ="templateOverlay">
            <div id="templateContainer">
                <p>{description}</p>
            </div>
        </div>
    );
} export default TemplateApp;