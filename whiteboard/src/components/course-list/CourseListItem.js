import React from 'react';
import './CourseListItem.css';

const CourseListItem = function({Course}) {
    return (
        <div className="row text-left course-list-item px-auto pb-3 pt-2 border-top border-bottom border-dark">
                    <div className="col-sm-6 col-lg-4">
                        <span><i className="fa fa-sticky-note icon-color"></i></span>&nbsp;
                        {Course.title}
                    </div>
                    <div className="col-lg-3 col-md-4 d-none d-md-block">
                        {Course.ownedBy}
                    </div>
                    <div className="col-3 d-none d-lg-block">
                        {Course.lastModifiedAt}
                    </div>                   
                    <div className="col-sm-6 col-md-2 text-right">
                        <span>
                        <i className="fa fa-times"></i>
                        </span>
                    </div>                    
                </div>
    )
}

export default CourseListItem;
