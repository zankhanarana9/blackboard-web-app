import React from 'react';

const modules = [
    {title : "Module 1:  HTML/CSS", id: '123'},
    {title : "Module 2: Bootstrap", id: '234'},
    {title : "Module 3: JavaScript", id: '345'},
    {title : "Module 4: JQuery", id: '456'},
    {title : "Module 5: ReactJS", id: '567'},
    {title : "Module 6: Redux", id: '678'},
];

const ModuleList = function() {
    return (     
          <div className="col-md-3" style={{backgroundColor: "#263141"}}>
          <ul className="nav flex-column nav-pills mb-3 module-list">
            {
                modules.map(module => {
                    return (
                      <li key={module.id}>
                      <a className="nav-link mr-2 mt-3 bg-dark template-module-list-item"  href="/">
                        {module.title}
                        <i className="fa fa-times module-remove float-right" ></i>                
                      </a>                 
                    </li> 
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
                <i className="fa fa-plus" ></i>
              </button>
            </div>
          </div>              
        </div>   
    );
}

export default ModuleList;