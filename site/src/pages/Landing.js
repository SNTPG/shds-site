import React from 'react';


class Landing extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const buttons = {
            "characters" : "Characters",
            "rules" : "Rules",
            "inventory" : "Inventory",
            "map" : "Map",
            "stats" : "Stats",
            "reference" : "Reference",
            "settings" : "Settings"
        };
        return(
            <div className="landingOverlay">
                <div className="landingMenu">

                </div>
                <div className="loadingAnimation">

                </div>
            </div>
        );
    }
} export default Landing;