import React from 'react';

const LessonTab = function({Lesson, SelectLesson, IsSelectedLesson}) {
    return(
        <li className="nav-item">
            <button className="btn"
                 onClick={() => {SelectLesson(Lesson)}}>
                <span className={IsSelectedLesson ? "lesson-active" : "lesson-tab"} >
                    {Lesson.title}
                </span>
           
            </button>
        </li>
    )
}

export default LessonTab;