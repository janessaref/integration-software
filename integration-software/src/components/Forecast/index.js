import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import Data from "../../data.json";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Forecast() {
    const [ gridApi, setGridApi ] = useState();
    const rowData = Data;

    // const gridOptions = {
    //     defaultColDef: {
    //         resizable: true,
    //         sortable: true,
    //         filter: true
    //       },
    //       onFirstDataRendered: onFirstDataRendered,
    // };

    // function onFirstDataRendered(params) {
    //     params.api.sizeColumnsToFit();
    //   }


    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        editable: true
    }),[]);

    const getDynamicColumns = (obj) => {
        return Object.keys(obj).map(key => ({ field: key }))
    }

    const onGridReady = (params) => {
        setGridApi(params)
        params.api.setColumnDefs(getDynamicColumns((Data[0])))
    }
    
    return (
        <div className="ag-theme-alpine" style={{ height: 600, width: 1200, padding: "20px" }}>
           <h1 align="center">Forecast Data Table</h1>
            <AgGridReact
                rowData={rowData}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
            />
        </div>
    )
}

export default Forecast;