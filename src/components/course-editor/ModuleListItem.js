import React from 'react';

<<<<<<< HEAD
const ModuleListItem = function({Module, DeleteModule}) {
    return(
        <li>
            <a className="nav-link mr-2 mt-3 bg-dark template-module-list-item text-left "  href="#">
            {Module.title}
            <span className="float-right">
                <i className="fa fa-edit mr-2" 
                    onClick={() => alert("Edit me")}
                ></i>
                <i className="fa fa-times module-remove " 
                    onClick={() => DeleteModule(123,Module.id)}
                ></i>   
            </span>            
            </a>                 
        </li> 
    )
=======
class ModuleListItem extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            isEdit:false,   
            ModuleTitle: this.props.Module.title     
        }
    }

    UpdateModule = (isEdit) => {
        this.setState({
            isEdit: isEdit  
        });
        this.props.UpdateModule(this.props.Module.id, this.state.ModuleTitle);
    }
    
    FormChanged =(event) => {
        this.setState({
            ModuleTitle : event.target.value
        });
    }
    render() {
        return(
            !this.state.isEdit ?
            (<li>            
                <div className={this.props.IsModuleSelected ? 
                  "row bg-active p-1 mx-auto mt-1" :
                  "row bg-module p-1 mx-auto mt-1"} 
                  onClick={() => this.props.SelectModule(this.props.Module)}>
                    <div className="col-9">
                        <button 
                            className= "btn" >
                                <span className="template-module-list-item"> {this.props.SelectedModule.title}    </span>                                               
                        </button>  
                    </div>
                    <div className="col-3">
                        <span className="float-right module-edit">
                            <i className="fa fa-edit mr-2" 
                                onClick={() => this.setState({isEdit: true})}
                            ></i>
                            <i className="fa fa-times" 
                                onClick={() => this.props.DeleteModule(this.props.Module.id)}
                            ></i>   
                        </span> 
                    </div>
                </div>               
            </li> 
            ) :
            (
                <li>
                    <a className="nav-link mr-2 mt-3 bg-dark template-module-list-item text-left "  href="#">
                        <div className="row bg-dark" >
                            <div className="col-9">
                                <input type="text" 
                                    className="form-control"                                      
                                    value={this.state.ModuleTitle} 
                                    onChange = {this.FormChanged} />
                            </div>
                            <div className="col-3">
                            <span className="float-right">
                                <i className="fa fa-check mr-2" 
                                    onClick={() => this.UpdateModule(false)}
                                ></i>
                                <i className="fa fa-times module-remove " 
                                    onClick={() => this.setState({isEdit: false})}
                                ></i>   
                            </span> 
                        </div> 
                        </div>                                               
                    </a>                 
                </li> 
            )
        )
    }
>>>>>>> react
}

export default ModuleListItem;