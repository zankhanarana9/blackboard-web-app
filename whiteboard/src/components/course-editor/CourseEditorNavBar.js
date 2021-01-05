import React from 'react';
import LessonTab from './LessonTab';
import './CourseEditor.css'

const navBarItems = [ "Build", "Pages", "Theme", "Store", "App", "Settings"];

class CourseEditorNavBar extends React.Component {

   constructor(props) {
       super(props);
      
       this.state = {
            Lessons :   this.props.Lessons
       }
   }
   render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo03" 
                    aria-controls="navbarTogglerDemo03" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <a href="/" className="navbar-brand">
                    <i className="fa fa-times pr-2"></i>  
                    &nbsp;Course-Web Developement
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">                    
                    {
                        this.props.Lessons.map(lesson => {
                            return (
                                <LessonTab 
                                    IsSelectedLesson = {this.props.SelectedLesson === lesson}
                                    SelectLesson={this.props.SelectLesson}
                                    Lesson = {lesson}
                                    key={lesson.id}/>
                            );
                        })
                    }                
                    </ul>            
                </div>
            </div>
        </nav>
        )
   }
}

export default CourseEditorNavBar;