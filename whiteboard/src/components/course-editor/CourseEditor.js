import React from 'react';
import CourseEditorNavBar from './CourseEditorNavBar';
import ModuleList from './ModuleList';
import './CourseEditor.css';
import Topic from './Topic';
import {getModulesByCourseId } from '../../services/CourseService';

class CourseEditor extends React.Component {

    state = {
        Modules:getModulesByCourseId(123)
    }     
 
   render() {
        return (            
            <div className="container-fluid p-0">            
                <CourseEditorNavBar />
                <div className="container-fluid">
                    <div className="row">
                        <ModuleList 
                            Modules={this.state.Modules} 
                            DeleteModule = {this.deleteModule}    
                            />
                        <Topic />
                    </div>
                </div>
            </div>
        )
   }
}

export default CourseEditor;