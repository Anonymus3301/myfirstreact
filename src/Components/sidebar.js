import React from 'react'
import '../App.css';
import {sidebardata} from './sidebardata'

function Sidebar() {
    return (
        <div className="Sidebar">
           
             <ul className="Sidebarlist">
                {sidebardata.map((value,key) =>{
                    return (
                        <li 
                        key={key}
                        className="row"
                        onClick={() =>{
                            window.location.pathname=value.link;
                        }}
                        >
                    
                    <div id="icon">{value.icon}</div>
                    <div id="title">{value.title}</div>
                   </li> 
                        );
                })}
             </ul>
        </div>
    )
}

export default Sidebar
