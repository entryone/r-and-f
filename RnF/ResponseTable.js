import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import * as response from './response';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export function ResponseTable({
  data,
  onScroll = () => {},
  onScrollEnd =() => {} 
 }) {
  const [rowData] = useState(response.getRowData(data));
  const [columnDefs] = useState(response.getColumnsDef(data));

  const gridOptions = {
    onBodyScroll: onScroll,
    onBodyScrollEnd: onScrollEnd,
  };
  return (
    <AgGridReact
      gridOptions={gridOptions}
      headerHeight={0}
      rowData={rowData}
      columnDefs={columnDefs}
    />
  );
}
