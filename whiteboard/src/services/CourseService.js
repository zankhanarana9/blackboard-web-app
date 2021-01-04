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