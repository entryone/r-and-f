import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import * as request from './request';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export function RequestTable({
   data,
   onScroll = () => {},
   onScrollEnd =() => {} 
  }) {
  const [rowData] = useState(request.getRowData(data));
  const [columnDefs] = useState(request.getColumnsDef(data));
  const ref = useRef(null);
  const gridOptions = {
    onBodyScroll: onScroll,
    onBodyScrollEnd: onScrollEnd,
    debounceVerticalScrollbar: true,
   //suppressHorizontalScroll: true
  };
  return (
    <AgGridReact
      gridOptions={gridOptions}
      rowData={rowData}
      columnDefs={columnDefs}
    />
  );
}
