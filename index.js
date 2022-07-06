import React, { useState } from 'react'
import { render } from 'react-dom'
import { RequestTable } from './RequestTable'
import { requestMock } from './requestMock'
import { ResponseTable } from './ResponseTable'
import { responseMock } from './responseMock'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const App = () => {

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <RequestTable data={requestMock} />
      <ResponseTable data={responseMock} />
    </div>
  );
};

render(<App />, document.getElementById('root'))
