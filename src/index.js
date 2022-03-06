import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Wdct from "./component/Wdct"
import TODO from './TODO'
import Home from "./component/Home"

ReactDOM.render(
 
    <Router>
    <Routes>
    <Route path="/App" element={ <App /> }/>
    <Route path="/App" element={ <TODO /> }/>
    <Route path="/weather" element={ <Wdct /> }/>
    <Route path="/" element={ <Home /> }/>
  
      </Routes>
    </Router>,
    
 
  document.getElementById('root')
);

reportWebVitals();
