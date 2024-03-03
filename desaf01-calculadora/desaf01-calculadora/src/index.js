import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './main/Ccalculator';

import './index.css';

const elemento = document.getElementById('root');
ReactDom.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator/>
  </div>,
  elemento);


