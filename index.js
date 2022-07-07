import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import { RequestTable } from './RequestTable';
import { requestMock } from './requestMock';
import { ResponseTable } from './ResponseTable';
import { responseMock } from './responseMock';
import './style.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  const ref = useRef(null);

  const onScrollRequest = (e) => {
    if (ref.current.el1) return;
    const el = ref.current.querySelectorAll('.ag-body-horizontal-scroll-viewport')[1];
    el.scrollLeft = e.left;
  
  };
  const onScrollRequestEnd = (e) => {};

  const onScrollResponse = (e) => {

    ref.current.el1 = true;
    const el = ref.current.querySelectorAll('.ag-body-horizontal-scroll-viewport')[0];
    const el2 = ref.current.querySelectorAll('.ag-body-horizontal-scroll')[0];
    el2.style.visibility = 'hidden';
    el2.style.height = '0px';
    el2.style.minHeight = '0px';
    el.scrollLeft = e.left;
  };
  const onScrollResponseEnd = (e) => {
    ref.current.el1 = false;
  };

  return (
    <div
      ref={ref}
      className="ag-theme-alpine"
      style={{ height: 300, width: 800 }}
    >
      <RequestTable
        onScroll={onScrollRequest}
        onScrollEnd={onScrollRequestEnd}
        data={requestMock}
      />
      <ResponseTable
        onScroll={onScrollResponse}
        onScrollEnd={onScrollResponseEnd}
        data={responseMock}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
