import React from 'react';
import CourseList from './CourseList';

const CourseHeader = function() {
    return (
        <div className="row mb-3 mt-3 text-left title">                    
                <div className="col-sm-6 col-lg-4 "> 
                        Title
                </div>
                <div className="col-lg-3 col-md-4 d-none d-md-block">
                    Owned by
                </div>                   
                <div className="col-3 d-none d-lg-block">
                    Last Modified by Me
                </div>                   
                <div className=" col-sm-6 col-md-2 text-right">
                        <i className="fas fa-grip-horizontal mr-1"></i>  
                        <i className="fa fa-sort"></i>                      
                </div>                                    
            </div>
    );
}

export default CourseHeader;