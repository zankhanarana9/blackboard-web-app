import React from 'react';

class LessonTab extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="nav-item" >
                <a 
                 className= {this.props.IsSelectedLesson ? "nav-link bg-lesson-active" : "nav-link"}
                 href="#"
                 onClick={() => {this.props.SelectLesson(this.props.Lesson)}}>
                    {this.props.Lesson.title}
                </a>
            </li>
        )
    }
}

export default LessonTab;