import React, { useState } from 'react';
import './App.css';
import TODO from './TODO'
import { NavLink } from 'react-router-dom';


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
   <div>
        <NavLink  activeclassname="active_class" to ="/">HOME</NavLink>
        <NavLink  activeclassname="active_class" to= "/weather">WEATHER</NavLink>
        <NavLink  activeclassname="active_class" to ="/App">TODO</NavLink>
        </div>
        
    <div className="main_div">
      <div className="center_div">
        <div className="head">
          <h2 style={{ color: "white", textAlign: "center" }}>MY TO DO LIST</h2>
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
