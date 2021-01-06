import React from 'react';

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
        </li> 
    )
}

export default TopicPill;