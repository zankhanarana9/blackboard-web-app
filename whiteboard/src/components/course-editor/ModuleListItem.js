import React from 'react';

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
}

export default ModuleListItem;