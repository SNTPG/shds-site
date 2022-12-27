import React from 'react';
import Landing from './Landing.js';
import Cast from './Cast.js';

class Tablet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {app : <Landing functions={this.funcList}/>};
    }

    goHome(){
        console.log("Going home!");
        this.setState({app: <Landing functions={this.funcList}/>});
    }
    openCast(){
        console.log("Opening cast!");
        this.setState({app: <Cast/>});
    }
    openMap(){
        console.log("Opening map!");
        this.setState({app: <Cast/>});
        /* Fix this later you dickhead */
    }

    funcList = {"Contacts": this.openCast.bind(this), "Map": this.openMap.bind(this)};

    render() {

        return(
            <div id ="tablet">
                <div id="tabletWrapper">
                    <div id="tabletCamera">
                        <div id="tabletLens"/>
                    </div>
                    <div id="tabletScreen">
                        {this.state.app}
                    </div>
                    <div id="tabletHome">
                        <button id="homeButton" onClick={() => this.goHome()}>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
} export default Tablet;