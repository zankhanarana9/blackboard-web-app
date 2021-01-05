import React from 'react';

const Widget = function() {
    return (
        <div className="widget border border-dark mt-3 mb-3">
              
        <div className="row mt-2 p-2">
<<<<<<< HEAD
          <div className="col-md-6 col-12">
            <h3>Heading widget</h3>
          </div>
          <div className="col-md-2 col-12">
            <div className="row">
                <div className="col">
                    <button className="btn btn-warning mr-2">
                        <i className="fa fa-arrow-up"></i>
                    </button>
                </div>
                <div className="col">
                    <button className="btn btn-warning ml-2">
=======
          <div className="col-md-5 text-left">
            <h3>Heading widget</h3>
          </div>
          <div className="col-md-2">
            <div className="row">
                <div className="col-1 mr-3">
                    <button className="btn btn-warning ">
                        <i className="fa fa-arrow-up"></i>
                    </button>
                </div>
                <div className="col-1">
                    <button className="btn btn-warning">
>>>>>>> react
                        <i className="fa fa-arrow-down"></i>
                    </button>
                </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="col-md-3 col-12">
=======
          <div className="col-md-3">
>>>>>>> react
            <select className="form-control" id="widgetType">
              <option> Heading</option>
              <option >Paragraph</option>
              <option>List</option>
              <option>Image</option>
              <option>Link</option>
            </select>
          </div>
<<<<<<< HEAD
          <div className="col-md-1 col-12">
=======
          <div className="col-md-2 text-right">
>>>>>>> react
            <button className="btn btn-danger">X</button>
          </div>
        </div>

        <div className="row mt-2 p-2">
          <div className="mb-2">                    
            <input type="text" className="form-control" 
                id="headingText" 
                placeholder="Heading Text" />
          </div>

          <div className="mb-2">   
            <select className="form-control">                      
              <option>Heading 1</option>
              <option>Heading 2</option>
              <option>Heading 3</option>
              <option>Heading 4</option>
              <option>Heading 5</option>
            </select>                                     
          </div>

          <div className="mb-2">                  
            <input type="text" className="form-control" id="widgetName" placeholder="Widget Name" />
          </div>

<<<<<<< HEAD
          <div className="mb-2 mt-2 ">
=======
          <div className="mb-2 mt-2 text-left">
>>>>>>> react
            <h4>Preview</h4>
            <h1>Heading Text</h1>
          </div>
        </div> 
      </div> 
    )
}

export default Widget;