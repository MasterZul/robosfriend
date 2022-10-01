import React from 'react';
import ReactDOM from 'react-dom/client'; //The reason is split into two library because React can be beside website
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import App from './containers/App.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
