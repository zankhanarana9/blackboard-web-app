import React from 'react';
import { addModule, deleteModule, getAllCourses, UpdateModule } from '../../services/CourseService';
import ModuleListItem from './ModuleListItem';


class ModuleList extends React.Component {
  
  constructor(props){
    super(props);    
    this.state={
      EditMode: false,
      Modules:this.props.Modules,
      NewModuleName: "New Module Name",
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

  addModule = () => {
      let modules = this.props.Modules;
      modules.push({
        id:(new Date().getTime()),
        title: this.state.NewModuleName,
        lessons:[]
      });
      this.setState({
        Modules: modules
      })
  }

  formChanged = (event) => {
    this.setState({
      NewModuleName: event.target.value
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
                        
                        Module={module}                         
                        IsModuleSelected={this.props.SelectedModule === module}
                        SelectedModule = {module}                        
                        SelectModule = {this.props.SelectModule}
                        DeleteModule = {this.deleteModule}  
                        EditModule = {this.editModule}    
                        UpdateModule = {this.updateModule}
                        AddModule = {this.addModule}
                        />
                    )
                })                
            }                                     
          </ul>
          <div className="row mt-3 bg-dark mx-auto" >
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
      ) 
   }
}

export default ModuleList;