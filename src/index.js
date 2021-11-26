import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render (
    <React.StrickMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrickMode>,
    document.getElementById('root')
);