import Widget from '../components/course-editor/Widget'
import  {connect} from 'react-redux';
import { findAllByDisplayValue } from '@testing-library/react';


const stateToPropertyMapper = state => {
    return {
        widgets: state.widgets,
        preview: state.preview
    }
}

const actionToPropertyMapper = dispatch => ({
    init: (topic) => dispatch({
        type: "INITIAL_STATE",
        topic: topic
    }),

    delete: (topic,widgetId) => dispatch({
        type: "DELETE_WIDGET",
        widgetId: widgetId,
        topic: topic
    }),

    updateWidget: (topic, widget) => dispatch({
        type: "UPDATE_WIDGET",
        widget: widget,
        topic:topic
    }),
    togglePreview: () => dispatch( {
        type: "TOGGLE_PREVIEW"
    })
})

const WidgetListContainer = connect(stateToPropertyMapper,actionToPropertyMapper)(Widget)

export default WidgetListContainer;