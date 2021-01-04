import React from 'react';

const navBarItems = [ "Build", "Pages", "Theme", "Store", "App", "Settings"];

const CourseEditorNavBar = function() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo03" 
                    aria-controls="navbarTogglerDemo03" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <a href="/" className="navbar-brand">
                    <i className="fa fa-times pr-2"></i>  
                    &nbsp;Course-Web Developement
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        navBarItems.map((item,index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" href="#">{item}</a>
                                </li>
                            );
                        })
                    }                
                    </ul>            
                </div>
            </div>
        </nav>
    )
}

export default CourseEditorNavBar;