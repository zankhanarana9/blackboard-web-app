import WidgetService from "../services/WidgetService";

const WidgetReducer = function(state = {widgets: [], selectedTopic: '', preview: "OFF"}, action) {
    switch(action.type) {
        case "INITIAL_STATE":
            return {
                widgets: WidgetService.getWidgetsByTopic(action.topic),
                preview: state.preview,
                selectedTopic: action.topic
            }

        case "DELETE_WIDGET" :            
            return {
                widgets: WidgetService.deleteWidgetById(action.topic, action.widgetId) , 
                preview: state.preview              
            };

        case "UPDATE_WIDGET" :
            return {
                widgets: WidgetService.updateWidget(action.topic,action.widget),
                preview: state.preview
            }

        case "TOGGLE_PREVIEW" :
            let current = "ON";
            if(state.preview === "ON") {
                current = "OFF"
            }            
            return {
                preview:current,
                widgets: state.widgets
            }                        
        default:
            return state;
    }
}

export default WidgetReducer;