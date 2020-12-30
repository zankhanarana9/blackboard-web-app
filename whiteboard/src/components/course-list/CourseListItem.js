import React from 'react';
import './CourseListItem.css';

const CourseListItem = function({Course}) {
    return (
        <div className="row text-left course-list-item px-auto pb-3 pt-2 border-top border-bottom border-dark">
                    <div className="col-3">
                        <span><i className="fa fa-sticky-note icon-color"></i></span>&nbsp;
                        {Course.title}
                    </div>
                    <div className="col-3">
                        {Course.ownedBy}
                    </div>
                    <div className="col-3">
                        {Course.lastModifiedAt}
                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-1">
                        <span>
                        <i className="fa fa-times "></i>
                        </span>
                    </div>                    
                </div>
    )
}

export default CourseListItem;
