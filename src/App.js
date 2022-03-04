import React, { useState } from 'react';
import './App.css';
import TODO from './TODO'
import {Route,  Routes, BrowserRouter} from "react-router-dom"
import Home from "./component/Home"
import Wdct from "./component/Wdct"
import Tempapp from "./component/Tempapp"
import Menu from './Menu'


const App = () => {
  
  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }

  return <>
  <Menu/>
    
    <Routes>
        <Route exact path="home" component={Home}/>
        <Route exact path ="weather" component={Wdct}/>
        <Route exact path="weather" component={Tempapp}/>
        <Route exact path="/" component={TODO}/>
        </Routes>
        
    <div className="main_div">
      <div className="center_div">
        <div className="head">
          <h1 style={{ color: "white", textAlign: "center" }}>MY TO DO LIST</h1>
          <input type="text" className="input" placeholder="Add" value={inputList}
            onChange={itemEvent} />
          <button onClick={listOfItems} className="my">ADD</button>
        </div>
        <div className="main">
          <ul>
            {items.map((itemval, index) => {
              return <TODO key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />;
            })}
            </ul>
        </div>
      </div>
    </div>
    
  </>
  
 
};
export default App;
