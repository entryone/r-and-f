import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { getColumnsDef, getRowData, response } from './mock';
import * as request from './request';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  //const [rowData] = useState(getRowData(response)); 
  //const [columnDefs] = useState(getColumnsDef(response));

  const [rowData2] = useState(request.getRowData(request.request.rnf)); 
  const [columnDefs2] = useState(request.getColumnsDef(request.request.rnf));

  //const rowData = getRowData(response);
  //const columnDefs = getColumnsDef(response);
  //const rowData2 = request.getRowData(request.request.rnf);
  //const columnDefs2 = request.getColumnsDef(request.request.rnf);
  //console.log('columnDefs', columnDefs)
  //console.log('rowData', rowData);
  //console.log('rows1', rowData)

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      {/*<AgGridReact rowData={rowData} columnDefs={columnDefs} />*/}
      <AgGridReact rowData={rowData2} columnDefs={columnDefs2} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
