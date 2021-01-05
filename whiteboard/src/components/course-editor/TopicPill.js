import React from 'react';

const TopicPill = function({Topic,IsSelectedTopic}) {
    return (
        <li className="nav-item mr-2 mb-2 topic-template"              
            style={{marginRight: "10px"}}>
            <a 
                className={IsSelectedTopic ? 
                    "nav-link btn bg-topic-active topic-list-item" :
                    "nav-link btn bg-secondary topic-list-item"} 
                aria-current="page" >
                    {Topic.title}
            </a>
        </li> 
    )
}

export default TopicPill;