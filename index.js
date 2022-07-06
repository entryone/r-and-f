import React, { useState } from 'react'
import { render } from 'react-dom'
import { AgGridReact } from 'ag-grid-react'
import { getColumnsDef, getRowData, response } from './response'
import * as request from './request'
import { RequestTable } from './RequestTable'
import { requestMock } from './requestMock'
import { ResponseTable } from './ResponseTable'
import { responseMock } from './responseMock'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const App = () => {
  const [rowData] = useState(getRowData(response)); 
  const [columnDefs] = useState(getColumnsDef(response));

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <RequestTable data={requestMock} />
      <ResponseTable data={responseMock} />
    </div>
  );
};

render(<App />, document.getElementById('root'))
