import React from 'react';
import CourseListItem from './CourseListItem';
import CourseHeader from './CourseHeader';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
=======
>>>>>>> react

const CourseList = function({Courses}) {
    return (
        <div className ="container">
            <CourseHeader />            
            <div className="row mb-3 text-left">
                <div className="col-3">
                    <h4>Recent Documents</h4>
                </div>
            </div>
           {
               Courses.map(course => {
<<<<<<< HEAD
                   return (<Link to={`/course-editor/${course.id}`} key= {course.id}> 
                    <CourseListItem 
                        Course={course} />
                   </Link>)
=======
                   return (
                    <CourseListItem key= {course.id}
                        Course={course} />    
                   )               
>>>>>>> react
               })
           }
        </div>
    )
}

export default CourseList;