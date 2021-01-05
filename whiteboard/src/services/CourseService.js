import courseList from './courses.json';

let courses = courseList;
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

export const UpdateModule =  async function(modules, moduleId, newTitle) {
    modules.map(x => {
        if(x.id === moduleId)  {
            x.title = newTitle;
        }
        return x;
    });
    return modules;
}

export const getLessonsByCourseIdAndModuleId= function(courseId, moduleId) {
    let lessons = courses.find(x => x.id === courseId)
    .modules.find(y => y.id === moduleId).lessons;
    console.log(lessons);
    return lessons; 
}