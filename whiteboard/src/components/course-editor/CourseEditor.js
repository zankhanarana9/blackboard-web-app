import React from 'react';
import CourseEditorNavBar from './CourseEditorNavBar';
import ModuleList from './ModuleList';
import './CourseEditor.css';
import Topic from './Topic';
import {getModulesByCourseId } from '../../services/CourseService';

class CourseEditor extends React.Component {
    
    constructor(props) {
        super(props);
        let modules = getModulesByCourseId(this.props.match.params.id);
        
        this.state = {            
            Modules:modules,
            SelectedModule: modules[0],
        }  
    }   
    selectModule = (module) => {        
        this.setState({
          SelectedModule: module
        });    
      }
    
 
   render() {
        return (                        
            <div className="container-fluid p-0">                        
                <CourseEditorNavBar 
                    SelectedCourseId = {this.props.match.params.id}
                    SelectedModule = {this.state.SelectedModule}
                />
                <div className="container-fluid">
                    <div className="row">
                        <ModuleList 
                            Modules={this.state.Modules} 
                            SelectedModule={this.state.SelectedModule}
                            DeleteModule = {this.deleteModule}   
                            CourseId = {this.props.match.params.id} 
                            />
                        <Topic />
                    </div>
                </div>
            </div>
        )
   }
}

export default CourseEditor;