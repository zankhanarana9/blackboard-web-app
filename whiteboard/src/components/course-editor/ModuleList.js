import React from 'react';
import { addModule, deleteModule, getAllCourses } from '../../services/CourseService';
import ModuleListItem from './ModuleListItem';


class ModuleList extends React.Component {
  
  constructor(props){
    super(props);    
    this.state={
      EditMode: false,
      Modules:this.props.Modules 
    }
  }
  
  deleteModule = (courseId, moduleId) => {    
    deleteModule(courseId,moduleId)
    .then(x => {
      this.setState( {
        Modules: x
      });
    });    
      
  }

  updateModule = (moduleId) => {
    alert("Edit me 2");
  }

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
        !this.state.EditMode &&
        (<div className="col-md-3" style={{backgroundColor: "#263141"}}>
          <ul className="nav flex-column nav-pills mb-3 module-list">
          
            {              
                this.state.Modules.map(module => {
                    return (
                      <ModuleListItem key={module.id}
                        Module={module} 
                        DeleteModule = {this.deleteModule}  
                        EditModule = {this.editModule}    
                        UpdateModule = {this.updateModule}
                        />
                    )
                })                
            }                                     
          </ul>
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
        </div> )
      ) 
   }
}

export default ModuleList;