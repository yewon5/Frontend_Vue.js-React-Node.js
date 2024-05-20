import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); 
// ReactDOM : Virtual DOM을 사용하여 실제 DOM을 조작하는 역할
// getElementById('root') : index.html root에 접근
// root.render : Virtual DOM을 활용하여 root요소에 실제 DOM에 컴포넌트를 렌더링하는 역할

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); //실행 화면

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
