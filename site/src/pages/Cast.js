import React from 'react';
import StudentMug from '../components/StudentMug.js'
import ChapMug from '../components/ChapMug.js'
import Card from '../components/Card.js'

class Cast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {card: null}
    }
    closeCard(character){
        var square = document.getElementById(character+"Square")
        square.classList.toggle("clicked");
        square.classList.toggle("loadOut");
        setTimeout(function() {
            square.classList.toggle("loadOut");
        }.bind(this), 1000)
        var cover = document.getElementById("castCover");
        cover.classList.toggle("active");
        this.setState({card: ""});
    }
    loadCard(character) {
        var square = document.getElementById(character+"Square")
        square.classList.toggle("clicked");
        var cover = document.getElementById("castCover");
        cover.classList.toggle("active");
        this.setState({card: <Card char={character} onClick={() => this.closeCard(character)}/>});
    }
    render() {
        const students = ["rei", "andrew", "avery", "camille", "ami", "emma", "empty", "august", "owen", "yiseul", "isaak", "jones", "hatman", "v", "mai", "yumeji"];
        const chaps = ["gaz", "simon"];
        const studentSquares = students.map((student) =>
            <div className={"student square "+ student} id={student+"Square"}>
                <button id={student+"Button"} onClick={() => this.loadCard(student)}>
                    <StudentMug character={student}/>
                </button>
            </div>
        );
        const chapSquares = chaps.map((chap) =>
            <div className={"chap square "+ chap} id={chap+"Square"}>
                <button id={chap} onClick={() => this.loadCard(chap)}>
                    <ChapMug character={chap}/>
                </button>
            </div>
        );
        return(
            <div id ="castOverlay">
                <div id="castContainer">
                    <div class="cast-grid">
                        {studentSquares}
                        {chapSquares}
                    </div>
                </div>
                <div id="castCover"/>
                {this.state.card}
            </div>
        )
    }
} export default Cast;