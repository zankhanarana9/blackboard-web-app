import React from 'react';
import { addModule, deleteModule, getAllCourses, UpdateModule } from '../../services/CourseService';
import ModuleListItem from './ModuleListItem';


class ModuleList extends React.Component {
  
  constructor(props){
    super(props);    
    this.state={
      EditMode: false,
      Modules:this.props.Modules,
      SelectedModule: this.props.SelectedModule,
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

  updateModule = (moduleId, newTitle) => {
     UpdateModule(this.state.Modules, moduleId,newTitle)
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

  addModule = (courseId) => {
      addModule(courseId)
        .then(x => {
          this.setState({
            Modules: x
          });
        });
  }

  selectModule = (module) => {        
    this.setState({
      SelectedModule: module
    });    
  }

  render(){
      return (             
        <div className="col-md-3" style={{backgroundColor: "#263141"}}>
          <ul className="nav flex-column nav-pills mb-3 module-list">          
            {              
                this.state.Modules.map(module => {
                    return (
                      <ModuleListItem key={module.id}
                        SelectedCourseId={this.props.CourseId}
                        SelectedModule={this.state.SelectedModule === module}
                        Module={module} 
                        DeleteModule = {this.deleteModule}  
                        EditModule = {this.editModule}    
                        UpdateModule = {this.updateModule}
                        SelectModule = {this.selectModule}
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
                  onClick ={() => this.addModule(this.props.CourseId)}
                ></i>
              </button>
            </div>
          </div>              
        </div>
      ) 
   }
}

export default ModuleList;