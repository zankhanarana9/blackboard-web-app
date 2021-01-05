import React from 'react';
import { getLessonsByCourseIdAndModuleId } from '../../services/CourseService';
import LessonTab from './LessonTab';

const navBarItems = [ "Build", "Pages", "Theme", "Store", "App", "Settings"];

class CourseEditorNavBar extends React.Component {

   constructor(props) {
       super(props);
       let selectedCourseId = this.props.SelectedCourseId;
       let selectedModule = this.props.SelectedModule;       
       this.state = {
            Lessons :   selectedModule.lessons
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
                    {console.log(this.state.Lessons)}
                    {
                        this.state.Lessons.map(lesson => {
                            return (
                                <LessonTab 
                                    Lesson = {lesson.title}
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