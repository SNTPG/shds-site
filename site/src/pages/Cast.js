import React from 'react';
import StudentMug from '../components/StudentMug.js'
import ChapMug from '../components/ChapMug.js'
import Card from '../components/Card.js'
import * as ReactDOM from 'react-dom';

class Cast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {card: null}
    }
    closeCard(){
        this.setState({card: null});
    }
    loadCard(character) {
        this.setState({card: <Card char={character} onClick={() => this.closeCard()}/>});
    }
    render() {
        const students = ["rei", "andrew", "avery", "camille", "ami", "emma", "empty", "august", "owen", "yiseul", "isaak", "jones", "hatman", "v", "mai", "yumeji"];
        const chaps = ["gaz", "simon"];
        const studentSquares = students.map((student) =>
            <div className={"student "+ student}>
                <button id={student} onClick={() => this.loadCard(student)}>
                    <StudentMug character={student}/>
                </button>
            </div>
        );
        const chapSquares = chaps.map((chap) =>
            <div className={"chap "+ chap}>
                <button id={chap} onClick={() => this.loadCard(chap)}>
                    <ChapMug character={chap}/>
                </button>
            </div>
        );
        var card;
        return(
            <div id ="castOverlay">
                <div id="castContainer">
                    <div class="cast-grid">
                        {studentSquares}
                        {chapSquares}
                    </div>
                </div>
                {this.state.card}
            </div>
        )
    }
} export default Cast;