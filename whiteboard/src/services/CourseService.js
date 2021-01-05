import courseList from './courses.json';

let courses = courseList;

//CRUD operations on courses
//get all courses
//get courses by id

class CourseService {
    static getAllCourses = function() {
        return courses;    
    }
    
    static getCourseById =  function(id) {
        return courses.find(x => x.id === id);
    }
    
    static updateCourseTitle = async function(id, newTitle) {
        return courses.map(x => {
            if(x.id === id) {
                x.title = newTitle;
            }
            return x;
        });
    }
    
    //Operations on module
    // getModulesByCourseId in-> courseId, returns []
    // updateModuleTitle(courseId, module)
    // add a new module(courseid, module)
    static getModulesByCourseId = function(id) {
        return courses.find(x => x.id === id).modules;
    }
    
    static addModuleToCourse = async function(courseId, module) {
        let course = await this.getCourseById(courseId);
        if(course !== undefined) {
            course.modules.push(module);
        }
        return course.modules;
    }
    
    static deleteModule = async function(courseId, moduleId) {
        let course = await this.getCourseById(courseId); 
        if(course !== undefined) {
            course.modules = await course.modules.filter(x => x.id !== moduleId);           
        }       
        return course.modules; 
    }
    
    static UpdateModule =  async function(modules, moduleId, newTitle) {
        modules.map(x => {
            if(x.id === moduleId)  {
                x.title = newTitle;
            }
            return x;
        });
        return modules;
    }
    
    static getLessonsByCourseIdAndModuleId= function(courseId, moduleId) {
        let lessons = courses.find(x => x.id === courseId)
        .modules.find(y => y.id === moduleId).lessons;
        console.log(lessons);
        return lessons; 
    }    

    static addTopic = async function(courseId, moduleId,lessonId, newTopic) {
        let course = await this.getCourseById(courseId);
        let module = course.modules.find(x => x.id === moduleId);
        let lesson = module.lessons.find(x=> x.id === lessonId);
        lesson.topics.push(newTopic);  
        return lesson.topics;
    }
}

export default CourseService;

