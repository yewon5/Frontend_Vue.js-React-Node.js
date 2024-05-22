import React from 'react';
import ReactDOM from 'react-dom/client';

//import FuncCounter from './FuncCounter';
//import App1 from './reducer/App1';
//import App2 from './reducer/App2';
import App3 from './reducer/App3'
//import App4 from './reducer/App4'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<FuncCounter title="이것은 Counter입니다." num={0}></FuncCounter>
  //<App1></App1>
  //<App2></App2>
  <App3></App3>
  //<App4></App4>
);
