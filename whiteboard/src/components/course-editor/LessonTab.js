import React from 'react';

class LessonTab extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="nav-item" >
                <a className="nav-link" href="#">{this.props.Lesson}</a>
            </li>
        )
    }
}

export default LessonTab;