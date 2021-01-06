import React from 'react';
import WidgetHeading from './WidgetHeading';
import WidgetList from './WidgetList';

class Widget extends React.Component {

  constructor(props) {
    super(props);
    props.init(props.topic);
  }

  componentDidUpdate() {
    this.props.init(this.props.topic);
  }
 
  render() {
    return (
      <div>   
        <div className="row pr-2">
          <div className="col-12 text-right">            
            <label htmlFor="btnPreview" className="form-label mr-2">Preview</label>           
            <button id="btnPreview" className={this.props.preview==="ON"?"btn btn-success mr-2":"btn btn-danger mr-2"} 
                            onClick={this.props.togglePreview}>
                        {this.props.preview}
            </button>  
            <button type="button" className="btn btn-success mr-2">Save</button>           
          </div>
        </div>                       
        {          
          this.props.widgets.map((widget,index) => 
            <div key={index}>              
              { widget.type === 'HEADING' && 
                <WidgetHeading 
                  widget={widget}
                  preview = {this.props.preview === "OFF"}
                  SelectedTopic = {this.props.topic} 
                  deleteWidget = {this.props.delete}  
                  updateWidget = {this.props.updateWidget}
                />}
              { widget.type === 'LIST' && 
                <WidgetList 
                    widget={widget}
                    preview = {this.props.preview === "OFF"}
                    SelectedTopic = {this.props.topic}
                    deleteWidget = {this.props.delete}                        
                    updateWidget = {this.props.updateWidget}               
                />
              }
             </div>
          )
        }
      </div>  
    )
  }
}
export default Widget;