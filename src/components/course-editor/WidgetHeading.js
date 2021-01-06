import React from 'react';
import WidgetOptions from './WidgetOptions';

const WidgetHeading = function({widget,SelectedTopic, deleteWidget, updateWidget, preview}) {
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
            <div className="mb-2">                    
              <input type="text" className="form-control" 
                  id="headingText" 
                  placeholder="Heading Text" 
                  value={widget.header}
                  onChange={(event) => {
                    widget.header = event.target.value;
                    updateWidget(SelectedTopic, widget);
                  }}
                  />
            </div>
          }

          {
            preview && 
            <div className="mb-2">   
              <select className="form-control"
                defaultValue={widget.size}
                onChange={(event) => {
                  widget.size = event.target.value;
                  updateWidget(SelectedTopic, widget)
                }}
              >                      
                <option value ="1">Heading 1</option>
                <option value="2"> Heading 2</option>
                <option value="3">Heading 3</option>           
              </select>                                     
            </div>
          }

          {
            !preview && 
            <div className="mb-2 mt-2 text-left">
              <h4>Preview</h4>                       
              { widget.size === "1" && <h1  style={{color:"red"}}>{widget.header}</h1> }
              { widget.size === "2" && <h2  style={{color:"purple"}}>{widget.header}</h2> }
              { widget.size === "3" && <h3  style={{color:"green"}}>{widget.header}</h3> }
            </div>
          }

        </div> 
      </div> 
    )
}

export default WidgetHeading;