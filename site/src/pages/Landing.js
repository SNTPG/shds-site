import React from 'react';
import AppIcon from '../components/AppIcon.js';


class Landing extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const buttonList = [
            "Contacts", "Rules", "Map", "Stats", "Chatroom", "Settings"
        ];
        const apps = buttonList.map((button) =>
            <div className={"app "+ button} id={button+"Button"}>
                <button className={"appButton"} id={button+"Button"} >
                    <AppIcon app={button}/>
                    <p>{button}</p>
                </button>
            </div>
        );
        return(
            <div className="landingOverlay">
                <div className="landingMenu">
                    <div className="landingGrid">
                        {apps}
                    </div>
                </div>
                <div className="loadingAnimation">

                </div>
                <div className='activeApp'>
                    
                </div>
            </div>
        );
    }
} export default Landing;