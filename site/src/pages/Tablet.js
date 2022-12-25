import React from 'react';

class Tablet extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div id ="tablet">
                <div id="tabletWrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
} export default Tablet;