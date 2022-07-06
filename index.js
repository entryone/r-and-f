import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { getColumnsDef, getRowData, response } from './response';
import * as request from './request';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  const [rowData] = useState(getRowData(response)); 
  const [columnDefs] = useState(getColumnsDef(response));

  const [rowData2] = useState(request.getRowData(request.request.get('rnf'))); 
  const [columnDefs2] = useState(request.getColumnsDef(request.request.get('rnf')));

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      <AgGridReact rowData={rowData2} columnDefs={columnDefs2} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
