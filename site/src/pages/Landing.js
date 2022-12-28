import React from 'react';
import AppIcon from '../components/AppIcon.js';
import Locked from '../assets/decor/locked.png';

class Landing extends React.Component {
    render(){
        const buttonList = [
            {
              appName: "Contacts",
              locked: false,
              description: ""
            },
            {
              appName: "Rules",
              locked: true,
              description: ""
            },
            {
              appName: "Map",
              locked: false,
              description: ""
            },
            {
              appName: "Stats",
              locked: true,
              description: ""
            },
            {
              appName: "Chatroom",
              locked: true,
              description: ""
            },
            {
              appName: "Notepad",
              locked: false,
              description: "An app you can use to take notes. They're automatically organized by date last edited."
            },
            {
              appName: "Camera",
              locked: false,
              description: "The camera app has a strikingly high quality camera. It can store up to ten photos and a minute of video. It comes with a simple built-in editor and some basic filters, so you can touch up selfies or add text onto your images."
            },
            {
              appName: "Recorder",
              locked: false,
              description: "A simple and easy to use voice recording app. You can record and play back up to ten minutes of sound, organize and name your clips however you like. You can even set recorded sounds as custom ringtones, or read automatic transcriptions of the recordings."
            },
            {
              appName: "Settings",
              locked: false,
              description: "A limited settings menu. You can customize the appearance of your tablet, as well as some accessibility options. There's also an 'account settings' subsection, but it's blocked by a pop up, showing your username and requiring a password. You don't remember setting a password..."
            }
          ]
        const apps = buttonList.map((button) =>
            <div key={button.appName} className={"app "+ button.appName} id={button.appName+"Button"}>
                <button className={"appButton "+button.locked} id={button.appName+"Button"} onClick={() => this.props.functions[button.appName](button.description)}>
                    <div className="imageContainer">
                        <AppIcon app={button.appName}/>
                        <img className="lock" src={Locked} alt="An icon of a lock."/>
                    </div>
                    <p>{button.appName}</p>
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
                <div className='landingBackground'></div>
                <div className="loadingAnimation">

                </div>
            </div>
        );
    }
} export default Landing;