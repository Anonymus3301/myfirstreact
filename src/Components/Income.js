import React from 'react'
import '../App.css'
function Income() {
    return (
        <div className="income">
            <h3 style={{color: "grey",padding:"15px 15px 0 15px",height:"10px"}}>Total Income<span className="options">...</span></h3>
            <h2 style={{padding:"0 15px",height:"10px"}}>$124,563.00<span className="increase">+6.9%</span></h2>
            <progress  style={{padding:"5px",height:"1px",margin:"0 15px ",width:"420px"}} id="file" value="63" max="100"> 32% </progress>
            <h6 style={{padding:"0 15px",color:"lightgray", margin:"0"}}>Yearly Goal</h6>
        </div>
    )
}

export default Income
