import React from 'react';

function TemplateApp({description}) {
    if(description===""){
        description = "This app is currently inaccessible."
    }
    if(description==="Dossier"){
        description = <p>A collection of Hope's Peak's private dossiers on the sixteen students in attendance. They can be accessed <a href="https://drive.google.com/drive/u/0/folders/1nXILqzTJesX3k-LjNSHNxsqPCDH7OWL5">here</a>.</p>;
    }
    return(
        <div id ="templateOverlay">
            <div id="templateContainer">
                <p>{description}</p>
            </div>
        </div>
    );
} export default TemplateApp;