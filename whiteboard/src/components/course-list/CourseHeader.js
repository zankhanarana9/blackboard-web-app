import React from 'react';
import CourseList from './CourseList';

const CourseHeader = function() {
    return (
        <div className="row mb-3 mt-3 text-left title">                    
                <div className="col-3">
                        Title
                </div>
                <div className="col-3">
                    Owned by
                </div>                   
                <div className="col-3">
                    Last Modified by Me
                </div>                   
                <div className="col-2 text-right">
                        <i className="fas fa-grip-horizontal"></i>                        
                </div>     
                <div className="col-1">
                    <i className="fa fa-sort"></i>
                </div>               
            </div>
    );
}

export default CourseHeader;