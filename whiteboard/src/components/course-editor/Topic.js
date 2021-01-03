import React from 'react';
import TopicPill from './TopicPill';
import './CourseEditor.css';
import Widget from './Widget';

const Topic = function() {
    return (
        <div className="col-md-9" >
            <div className="row mt-3">
              <div className="col-sm-4">  
                <div className="input-group">
                  <input type="text" 
                    id="newTopicName" 
                    className="form-control" 
                    placeholder="Topic Name" /> 
                  <span className="input-group-append" 
                    style={{marginLeft: "5px"}}>
                    <button className="btn topic-list-item bg-secondary" 
                        id="addTopic">
                            <i className="fa fa-plus"></i>
                    </button>               
                  </span>
                </div>                                                
              </div>             
            </div> 
            <div className="row mt-3">
                <div className="col-12">
                    <ul className="nav nav-pils pull-left topic-list">
                       <TopicPill />
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{textAlign: "right!important"}}>
                <button type="button" className="btn btn-success mr-2">Save</button>
                <label htmlFor="btnPreview">Preview</label>
                <input type="checkbox" 
                    id="btnPreview" 
                    data-toggle="toggle" 
                    data-style="ios" />
                </div>
            </div>
            <Widget />
        </div>
    )
}

export default Topic;