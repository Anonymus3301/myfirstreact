import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../App.css'
import LineChart from './Linechart'
function Balance() {
    return (
        <div className="balance">
            <h2 className="bal"style={{height:"30px",margin:"0",padding:"15px"}}>Balance<span style={{border:"2px solid #f1f4f9",padding:"5px;"}} className="options">Monthly<span><ExpandMoreIcon style={{float:"right"}}/></span></span></h2>
            <div className="earsal">
                <div className="earning">
                <h3 style={{color: "grey",padding:"0px 0px 0 15px",margin:"0",height:"10px"}}>Earnings</h3>
                <h2 style={{padding:"0 15px",margin:"15px 0",height:"10px"}}>43.41%<span className="increase">+2.5%</span></h2>
                </div>
                <div className="sale">
                <h3 style={{color: "grey",padding:"0px 15px 0 15px",margin:"0",height:"10px"}}>Sales Value</h3>
                <h2 style={{padding:"0 15px",margin:"15px 0",height:"10px"}}>$95,422<span className="increase">+13.5%</span></h2>
                </div>
            </div>
             <LineChart />
        </div>
    )
}

export default Balance
