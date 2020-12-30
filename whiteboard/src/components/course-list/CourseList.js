import React from 'react';
import CourseListItem from './CourseListItem';
import CourseHeader from './CourseHeader';

const Courses = [ 
    {
        title: "Course 1",
        ownedBy : "me",
        lastModifiedAt : "6.45 PM",
        id: 1        
    },
    {
        title: "Course 2",
        ownedBy : "me",
        lastModifiedAt : "6.45 PM",
        id: 2      
    },
    {
        title: "Course 3",
        ownedBy : "me",
        lastModifiedAt : "6.44 PM",
        id: 3        
    }
]
const CourseList = function() {
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
                   return (<CourseListItem id= {course.id}
                        Course={course} />)
               })
           }
        </div>
    )
}

export default CourseList;