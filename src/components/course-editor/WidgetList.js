import React from 'react';
import WidgetOptions from './WidgetOptions';

const WidgetList = function({widget, SelectedTopic,deleteWidget,updateWidget, preview}) {
    return (
        <div className="widget border border-dark mt-3 mb-3">
         <WidgetOptions 
              widget={widget}
              deleteWidget={deleteWidget}
              SelectedTopic={SelectedTopic}
            />                    
          <div className="row mt-2 p-2">
              {
                preview &&
                <div className="mb-2 text-left">    
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    placeholder=" Enter one
                    list item
                    per line"
                    value={widget.options}
                    onChange={(event) => {
                      widget.options=event.target.value;
                      updateWidget(SelectedTopic,widget);
                    }}></textarea>
              </div>
              }

            {
              preview &&
              <div className="mb-2 text-left"> 
                <label htmlFor="listType" className="form-label">List type</label>  
                <select className="form-control" 
                  id="listType"
                  defaultValue={widget.listType}
                  onChange = {(event) => {
                    widget.listType = event.target.value;
                    updateWidget(SelectedTopic,widget);
                  }}>                      
                  <option value="ol">Ordered</option>
                  <option value="ul">Unordered</option>
                </select>                                     
              </div>
            }           

            {
              !preview && 
              <div className="mb-2 mt-2 text-left">
              <h4>Preview</h4>
              {
                widget.listType === "ol" &&                 
                <ol>                
                  {
                    widget.options.split("\n").map((option,index) =>
                    <li key={index}>{option}</li>
                    )
                  }
                </ol>
              } 

              {
                widget.listType === "ul" &&                 
                <ul>                
                  {
                    widget.options.split("\n").map((option,index) =>
                    <li key={index}>{option}</li>
                    )
                  }
                </ul>
              }            
            </div>
            }
          </div> 
      </div> 
    )
}

export default WidgetList;