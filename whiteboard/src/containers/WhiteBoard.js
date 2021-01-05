import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseEditor from '../components/course-editor/CourseEditor';
import Course from '../components/course-list/Course';
<<<<<<< HEAD
import { getAllCourses } from '../services/CourseService';
=======
import CourseService from '../services/CourseService';
>>>>>>> react

class WhiteBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            courses: getAllCourses()
=======
            courses: CourseService.getAllCourses()
>>>>>>> react
        }
    }
    render() {
        return (
            <Router>
                <Route 
                    exact path="/" 
                    render={() => <Course Courses={this.state.courses} />}
                    />

                <Route 
                    exact path="/course-editor/:id" 
                    component={CourseEditor} />
            </Router>
        )
    }
}

export default WhiteBoard;
