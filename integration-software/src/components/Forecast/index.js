import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Data from "../../data.json";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Forecast() {
    const [ gridApi, setGridApi ] = useState();
    const rowData = Data;
    // console.log("this is " + forecastData[0].Worker)
    // console.log(forecastData[0])

    const getDynamicColumns = (obj) => {
        return Object.keys(obj).map(key => ({ field: key }))
    }
    // console.log(Object.keys(Data[0]).map(key=>({field:key})))
    // console.log(Object.keys(Data[0]))

    const onGridReady = (params) => {
        setGridApi(params)
        params.api.setColumnDefs(getDynamicColumns((Data[0])))
    }
    
  const defColumnDefs = {flex:1}

    return (
        <div className="ag-theme-alpine" style={{ height: 600, width: 800 }}>
           <h1 align="center">Forecast Data Table</h1>
            <AgGridReact
                // {Data.map(data=>{
                //     return(
                //         <div key={data.Worker}>
                //             {console.log(data)}
                //         </div>
                //     )
                // })}
                rowData={rowData}
                defaultColDef={defColumnDefs}
                onGridReady={onGridReady}
            />
        </div>
    )
}

export default Forecast;