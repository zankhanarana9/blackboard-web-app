import React from 'react';
import CourseEditorNavBar from './CourseEditorNavBar';
import ModuleList from './ModuleList';
import './CourseEditor.css';
import Topic from './Topic';

const CourseEditor = function() {
    return (
        <div className="container-fluid p-0">
            <CourseEditorNavBar />
            <div className="container-fluid">
                <div className="row">
                    <ModuleList />
                    <Topic />
                </div>
            </div>
        </div>
    );
}

export default CourseEditor;