import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//한 파일당 한 컴포넌트를 가지고 있고,index.js에서 그 컴포넌트를 import시킴


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App />
 // </React.StrictMode>
);

