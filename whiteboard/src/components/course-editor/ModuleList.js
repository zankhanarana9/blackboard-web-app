import React from 'react';
<<<<<<< HEAD
import { addModule, deleteModule, getAllCourses } from '../../services/CourseService';
import ModuleListItem from './ModuleListItem';

=======
import CourseService from '../../services/CourseService';

import ModuleListItem from './ModuleListItem';

//responsible for the whole list
//add a new module
//delete a module
>>>>>>> react

class ModuleList extends React.Component {
  
  constructor(props){
    super(props);    
    this.state={
<<<<<<< HEAD
      Modules:this.props.Modules 
    }
  }
  
  deleteModule = (courseId, moduleId) => {    
    deleteModule(courseId,moduleId)
=======
      EditMode: false,
      Modules:this.props.Modules,
      NewModuleName: "New Module Name",
    }
  }
  
  deleteModule = (moduleId) => {        
    CourseService.deleteModule(this.props.CourseId,moduleId)
>>>>>>> react
    .then(x => {
      this.setState( {
        Modules: x
      });
    });    
      
  }

<<<<<<< HEAD
  addModule = (courseId) => {
      addModule(courseId)
        .then(x => {
          this.setState({
            Modules: x
          });
        });
  }

  render(){
      return (     
        <div className="col-md-3" style={{backgroundColor: "#263141"}}>
          <ul className="nav flex-column nav-pills mb-3 module-list">
          
=======
  updateModule = (moduleId, newTitle) => {
     CourseService.UpdateModule(this.state.Modules, moduleId,newTitle)
      .then(x => {
        this.setState(prevState => {
          return(
            {
              Modules : x
            }
          )          
        })  
      })  
  }

  addModule = () => {
    let newModule ={
      id:(new Date().getTime()),
      title: this.state.NewModuleName,
      lessons:[{
        id:new Date().getTime(),
        title: '',
        topics:[]
      }]
    }  
    CourseService.addModuleToCourse(this.props.CourseId, newModule)
      .then(modules => {
        this.setState({
          Modules : modules
        })
      });
  }

  formChanged = (event) => {
    this.setState({
      NewModuleName: event.target.value
    });
  }


  render(){
      return (             
        <div className="col-md-3" style={{backgroundColor: "#263141"}}>
          <ul className="nav flex-column nav-pills mt-3 module-list">          
>>>>>>> react
            {              
                this.state.Modules.map(module => {
                    return (
                      <ModuleListItem key={module.id}
<<<<<<< HEAD
                        Module={module} 
                        DeleteModule = {this.deleteModule}                         
=======
                        SelectedCourseId={this.props.CourseId}
                        
                        Module={module}                         
                        IsModuleSelected={this.props.SelectedModule === module}
                        SelectedModule = {module}                        
                        SelectModule = {this.props.SelectModule}
                        DeleteModule = {this.deleteModule}  
                        EditModule = {this.editModule}    
                        UpdateModule = {this.updateModule}
                        AddModule = {this.addModule}
>>>>>>> react
                        />
                    )
                })                
            }                                     
          </ul>
<<<<<<< HEAD
          <div className="row mt-3 bg-dark mx-auto" >
            <div className="col-9">
              <input type="text" className="form-control mt-2 mb-2" id="newModule" placeholder="New Module Name" />
            </div>
            <div className="col-2 offset-sm-1">
              <button className="btn btn-success mt-2  float-right" id="add-module">
                <i className="fa fa-plus" 
                  onClick ={() => this.addModule(123)}
                ></i>
              </button>
            </div>
          </div>              
        </div>   
=======
          <div className="row mt-2 bg-module mx-auto" >
            <div className="col-9">
              <input type="text" className="form-control mt-2 mb-2" 
                id="newModule" 
                value={this.state.NewModuleName} 
                  onChange={this.formChanged}
                />
            </div>
            <div className="col-2 offset-sm-1">
              <button className="btn btn-success mt-2  float-right" 
                id="add-module"
                onClick ={this.addModule} >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>              
        </div>
>>>>>>> react
      ) 
   }
}

export default ModuleList;