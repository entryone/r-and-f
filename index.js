import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { getColumnsDef, getRowData, response } from './mock';
import * as request from './request';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  /*const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ]); */

  /*const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);*/

  const rowData = getRowData(response);
  const columnDefs = getColumnsDef(response);
  //const rowData2 = request.getRowData(request.request.rnf);
  //const columnDefs2 = request.getColumnsDef(request.request.rnf);
  //console.log('columnDefs', columnDefs)
  //console.log('rowData', rowData);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    
    </div>
  );
};

render(<App />, document.getElementById('root'));
