import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseListNav from './Nav';
import './Course.css';
import CourseList from './CourseList';

const Course = function() {
    return (
        <div className="container-fluid">
            <CourseListNav />
            <CourseList />
        </div>
    );
}

export default Course;
