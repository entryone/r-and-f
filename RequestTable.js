import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import * as request from './request'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

export function RequestTable ({data}) {

  const [rowData] = useState(request.getRowData(data))
  const [columnDefs] = useState(request.getColumnsDef(data))

  return (<AgGridReact rowData={rowData} columnDefs={columnDefs} />)
}


