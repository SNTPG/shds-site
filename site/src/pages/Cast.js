import React from 'react';
import StudentMug from '../components/StudentMug.js'
import ChapMug from '../components/ChapMug.js'

function Cast(props){
    const students = ["rei", "andrew", "avery", "camille", "ami", "emma", "empty", "august", "owen", "yiseul", "isaak", "jones", "hatman", "v", "mai", "yumeji"];
    const chaps = ["gaz", "simon"];
    const studentSquares = students.map((student) =>
        <div className={"student "+ student}>
            <button id={student}>
                <StudentMug character={student}/>
            </button>
        </div>
    );
    const chapSquares = chaps.map((chap) =>
        <div className={"chap  "+ chap}>
            <button id={chap}>
                <ChapMug character={chap}/>
            </button>
        </div>
    );
    return(
        <div id="castContainer">
            <div class="cast-grid">
                {studentSquares}
                {chapSquares}
            </div>
        </div>
    )
} export default Cast;