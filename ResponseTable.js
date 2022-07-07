import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import * as response from './response'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

export function ResponseTable ({data}) {
  const [rowData] = useState(response.getRowData(data))
  const [columnDefs] = useState(response.getColumnsDef(data))
  return (<AgGridReact headerHeight={0}
    rowData={rowData} columnDefs={columnDefs} />)
}
