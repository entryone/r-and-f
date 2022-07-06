import React, { useState } from 'react'
import { render } from 'react-dom'
import { AgGridReact } from 'ag-grid-react'
import { getColumnsDef, getRowData, response } from './response'
import * as request from './request'
import {RequestTable} from './RequestTable'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const App = () => {
  const [rowData] = useState(getRowData(response)); 
  const [columnDefs] = useState(getColumnsDef(response));

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <RequestTable data={request.request.get('rnf')} />
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

render(<App />, document.getElementById('root'))
