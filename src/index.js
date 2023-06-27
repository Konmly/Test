import React from 'react';
import ReactDOM from 'react-dom/client'; // передаешь элементы, и он с ним проводит манипуляции
import App from './App'; // точка входа
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
