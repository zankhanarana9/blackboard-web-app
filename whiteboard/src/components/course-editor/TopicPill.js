import React from 'react';

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
        </li> 
    )
}

export default TopicPill;