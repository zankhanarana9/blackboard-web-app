import React from 'react';

const WidgetOptions = function({widget, deleteWidget, SelectedTopic}) {
    return (
    <div className="row mt-2 p-2">
        <div className="col-md-5 text-left">
        <h3>{widget.type} widget</h3>
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
                    <i className="fa fa-arrow-down"></i>
                </button>
            </div>
        </div>
        </div>
        <div className="col-md-3">
        <select className="form-control" id="widgetType">
            <option> Heading</option>
            <option>Paragraph</option>
            <option>List</option> 
            <option>Image</option>
            <option>Link</option> 
        </select>
        </div>
        <div className="col-md-2 text-right">
        <button className="btn btn-danger"
            onClick={() => deleteWidget(SelectedTopic, widget.id)}
        >X</button>
        </div>
    </div>
  )
}

export default WidgetOptions;