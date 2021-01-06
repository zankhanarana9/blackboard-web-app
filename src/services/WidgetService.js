import CourseService from './CourseService';

class WidgetService {
    static getWidgetsByTopic(topic) {
        return topic.widgets || [];
    }

    static deleteWidgetById(topic, widgetId) {
       topic.widgets = topic.widgets.filter(x=> x.id !== widgetId) ;
       return topic.widgets;
    }

    static updateWidget(topic, widget) {
        topic.widgets = topic.widgets.map(x => {
            if(x.id === widget.id) {
                return widget;
            }
            return x;
        });

        return topic.widgets;
    }
}


export default WidgetService;