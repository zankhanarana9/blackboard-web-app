<<<<<<< HEAD
const courses = [ 
    {
        title: "Course 1",
        ownedBy : "me",
        lastModifiedAt : "6.45 PM",
        id: 123 ,
        modules: [
            {title : "Module 1:  HTML/CSS", id: '123'},
            {title : "Module 2: Bootstrap", id: '234'},
            {title : "Module 3: JavaScript", id: '345'},
            {title : "Module 4: JQuery", id: '456'},
            {title : "Module 5: ReactJS", id: '567'},
        ]       
    },
    {
        title: "Course 2",
        ownedBy : "me",
        lastModifiedAt : "6.45 PM",
        id: 234,
        modules: [
            {title : "Module 1:  HTML/CSS", id: '123'},
            {title : "Module 2: Bootstrap", id: '234'},
            {title : "Module 3: JavaScript", id: '345'},
            {title : "Module 4: JQuery", id: '456'}
        ]       
    },
    {
        title: "Course 3",
        ownedBy : "me",
        lastModifiedAt : "6.44 PM",
        id: 345,
        modules: [
            {title : "Module 4: JQuery", id: '456'},
            {title : "Module 5: ReactJS", id: '567'},
            {title : "Module 6: Redux", id: '678'},
        ]           
    }
];

export const getAllCourses= function() {
    return courses;    
}

export const getModulesByCourseId = function(id) {
    return courses.find(x => x.id === id).modules;
}

export const deleteModule = async function(courseId, moduleId) {
    let course = await courses.find(x => x.id === courseId)    
    course.modules = await course.modules.filter(x => x.id !== moduleId);           
    return course.modules; 
}

export const addModule = async function(courseId) {
    let course = await courses.find(x => x.id === courseId);
    course.modules.push({
        title: "New Module", id:`${(new Date()).getTime()}`
    });
    console.log(course.modules);
    return course.modules;
}
=======
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

>>>>>>> react
