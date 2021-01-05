import React from 'react';

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
                <a className=
                    {this.props.SelectedModule ? 
                    "nav-link mr-2 mt-3 template-module-list-item text-left bg-active" :
                     "nav-link mr-2 mt-3 bg-dark template-module-list-item text-left"}                                                               
                     href='#'
                     onClick={() => this.props.SelectModule(this.props.Module)}>
                {this.state.ModuleTitle}                
                <span className="float-right">
                    <i className="fa fa-edit mr-2" 
                        onClick={() => this.setState({isEdit: true})}
                    ></i>
                    <i className="fa fa-times module-remove " 
                        onClick={() => this.props.DeleteModule(this.props.SelectedCourseId,this.props.Module.id)}
                    ></i>   
                </span>            
                </a>                 
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
}

export default ModuleListItem;