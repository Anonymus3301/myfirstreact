import React from 'react'
import '../App.css'
import Bar from './BarChart'
function NewUsers() {
    return (
        
        <div className="newusers">
            <h3 style={{color: "grey",padding:"15px 15px 0 15px",height:"10px"}}>New Users<span className="options">...</span></h3>
            <h2 style={{padding:"0 15px",height:"10px"}}>94.2%<span className="increase">+6.9%</span></h2>
            <Bar />
        </div>
    )
}

export default NewUsers
