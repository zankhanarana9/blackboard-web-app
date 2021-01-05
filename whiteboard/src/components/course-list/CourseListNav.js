import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const CourseListNav = function() {
    return (
        <nav className="navbar navbar-dark bg-primary sticky-top">
        <div className="container-fluid">
            <button className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarTogglerDemo01" 
                aria-controls="navbarTogglerDemo01" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>                 
            <a className="navbar-brand h1">Course Manager</a>                      
            <form className="d-flex">
                <input className="form-control me-2 " 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" />            
            </form>
            <button type="button" 
                className="btn btn-circle btn-lg " 
                    style={{backgroundColor: "red"}}>
                <i className="fas fa-plus fa-2x" 
                    aria-hidden="true" 
                    style={{color:"white"}}></i>
            </button>      
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active"
                         aria-current="page" 
                         href="../auth/login.html">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" 
                        aria-current="page" 
                        href="../auth/login.html">Logout</a>
                    </li>
                </ul>
              </div>   
        </div>
      </nav>
    )
}

export default CourseListNav;