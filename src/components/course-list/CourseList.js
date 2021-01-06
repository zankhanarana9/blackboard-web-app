import React from 'react';
import CourseListItem from './CourseListItem';
import CourseHeader from './CourseHeader';

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
                   return (
                    <CourseListItem key= {course.id}
                        Course={course} />    
                   )               
               })
           }
        </div>
    )
}

export default CourseList;