import React from 'react';

class Tablet extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div id ="tablet">
                <div id="tabletWrapper">
                    <div id="tabletCamera"/>
                    <div id="tabletScreen">
                        {this.props.children}
                    </div>
                    <div id="tabletHome"/>
                </div>
            </div>
        )
    }
} export default Tablet;