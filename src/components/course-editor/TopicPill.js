import React from 'react';

<<<<<<< HEAD
const TopicPill = function() {
    return (
        <li className="nav-item mr-5 mb-2 topic-template"  
            hidden
            style={{marginRight: "10px"}}>
            <a className="nav-link btn bg-secondary topic-list-item" 
                aria-current="page" 
                href="/">
                    Topic 1
            </a>
=======
const TopicPill = function({Topic,IsSelectedTopic,SelectTopic}) {
    return (
        <li className="nav-item mr-2 mb-2 topic-template"              
            style={{marginRight: "10px"}}>
            <button 
                className = {IsSelectedTopic ? 
                    "btn btn-success text-dark" : 
                    "btn btn-secondary text-dark"}
                    onClick={() => SelectTopic(Topic)}>
                {Topic.title}
            </button>           
>>>>>>> react
        </li> 
    )
}

export default TopicPill;