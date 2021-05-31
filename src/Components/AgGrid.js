import React from 'react'
import {AgGridColumn,AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
function AgGrid() {
    
    const rowData = [
        {InvoiceID:"MO63592DR2",Date:"08.04.2021",Description:"Code 5928MD01",Status:"Completed",Description:"$2500.00"},
        {InvoiceID:"MO63592DR2",Date:"08.04.2021",Description:"Code 5928MD01",Status:"Completed",Description:"$2500.00"},
        {InvoiceID:"MO63592DR2",Date:"08.04.2021",Description:"Code 5928MD01",Status:"Completed",Description:"$2500.00"},
        {InvoiceID:"MO63592DR2",Date:"08.04.2021",Description:"Code 5928MD01",Status:"Completed",Description:"$2500.00"},
        {InvoiceID:"MO63592DR2",Date:"08.04.2021",Description:"Code 5928MD01",Status:"Completed",Description:"$2500.00"}
    ];
    return (
        <div className="ag-theme-balham" id="them" style={{height: 200}}>
            <h2 className="rec">Recent Transactions<span className="export">Export</span></h2>
        <AgGridReact
            rowData={rowData}>
            <AgGridColumn sortable="true" filter="true" field="InvoiceID"></AgGridColumn>
            <AgGridColumn sortable="true" filter="true" field="Date"></AgGridColumn>
            <AgGridColumn sortable="true" filter="true" field="Description"></AgGridColumn>
            <AgGridColumn sortable="true" filter="true" field="Status"></AgGridColumn>
            <AgGridColumn sortable="true" filter="true" field="Description"></AgGridColumn>
            
        </AgGridReact>
    </div>
    )
}

export default AgGrid
