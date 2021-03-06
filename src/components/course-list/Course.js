import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseListNav from './CourseListNav';
import './Course.css';
import CourseList from './CourseList';

const Course = function({Courses}) {
    return (
        <div className="container-fluid">
            <CourseListNav />        
            <CourseList Courses={Courses}/>
        </div>
    );
}

export default Course;
