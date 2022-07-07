import React from 'react';
import { render } from 'react-dom';
import { RnF } from './RnF'
import './style.css';


const App = () => {
  


  return (
    <div style={{ height: 300, width: 800 }}>
      <RnF/>
    </div>
  );
};

render(<App />, document.getElementById('root'));
