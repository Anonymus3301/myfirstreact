import React from 'react'
import Income from './Income'
import Balance from './Balance'
import NewUsers from './NewUsers'
import AgGrid from './AgGrid'
import '../App.css'
function Totalincome() {
    return (
        <div className="all">
            <div class ="vertical"><Income />
            <NewUsers />
            </div>
            <Balance />
            <AgGrid />
        </div>
    )
}

export default Totalincome
