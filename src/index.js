import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // Componente principal que recibe el resto de componentes .js
import reportWebVitals from './reportWebVitals';

// Importaciones propias (como es un export default, se puede renombrar a voluntad)
import AppJSX from './App.jsx'; //Se debe colocar la extensión si se usan .js y .jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppJSX />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
