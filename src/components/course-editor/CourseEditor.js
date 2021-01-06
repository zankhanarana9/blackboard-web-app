import React from 'react';
import CourseEditorNavBar from './CourseEditorNavBar';
import ModuleList from './ModuleList';
import './CourseEditor.css';
import Topic from './Topic';
import CourseService from '../../services/CourseService';

class CourseEditor extends React.Component {
    
    constructor(props) {
        super(props);
        
        const courseId = this.props.match.params.id;
        const course = CourseService.getCourseById(courseId);
             
        let selectedModule = '';
        let selectedTopic = '';
        let selectedLesson = '';
        
        if(course.modules !== undefined) {
            selectedModule = course.modules[0];
            selectedLesson = selectedModule.lessons[0];
            selectedTopic =  selectedLesson.topics[0];

        }
        this.state = {   
            Course: course,         
            Modules:course.modules,
            SelectedModule: selectedModule,
            SelectedLesson: selectedLesson,
            SelectedTopic : selectedTopic
        }  
    }   
    selectModule = (module) => {          
        const selectedLesson = module.lessons.length > 0 ? 
            module.lessons[0] : '';        
        const selectedTopic = selectedLesson.topics ? (
            selectedLesson.topics.length > 0 ? 
            selectedLesson.topics[0] : ''
        ) : ''
        this.setState({
          SelectedModule: module,
          SelectedLesson: selectedLesson ,
          SelectedTopic : selectedTopic 
        });    
    }

    selectLesson = (lesson) => {        
        this.setState({
            SelectedLesson: lesson,
            SelectedTopic: lesson.topics[0]
        })
    }

    selectTopic = (topic) => {
        this.setState({
          SelectedTopic: topic
        });
    }
    
 
   render() {
        return (                        
            <div className="container-fluid p-0">                        
                <CourseEditorNavBar                     
                    SelectedLesson = {this.state.SelectedLesson}
                    Lessons = {this.state.SelectedModule.lessons}
                    SelectLesson={this.selectLesson}
                />
                <div className="container-fluid">
                    <div className="row">
                        <ModuleList 
                            CourseId = {this.props.match.params.id}                             
                            Modules={this.state.Modules || []} 
                            SelectedModule={this.state.SelectedModule}
                            SelectedLesson = {this.state.SelectedLesson}
                            SelectedTopic = {this.state.SelectedTopic}                               
                            SelectModule = {this.selectModule}                            
                            />
                        <Topic 
                            CourseId = {this.props.match.params.id}
                            SelectedModule={this.state.SelectedModule}
                            SelectedLesson={this.state.SelectedLesson}
                            SelectedTopic = {this.state.SelectedTopic}                            
                            Topics = {this.state.SelectedLesson.topics || []}
                            SelectTopic = {this.selectTopic}
                        />
                    </div>
                </div>
            </div>
        )
   }
}

export default CourseEditor;