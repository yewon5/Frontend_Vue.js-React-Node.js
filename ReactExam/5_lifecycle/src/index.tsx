import React from 'react';
import ReactDOM from 'react-dom/client';
//mport './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//import Counter from './Counter'
import FuncCounter from './FuncCounter';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( //메인페이지
  //<Counter title="이것은 Counter입니다." num={0}></Counter>
  <FuncCounter title="이것은 Counter입니다." num={0}></FuncCounter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
