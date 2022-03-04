import React, { useState } from 'react';
import './App.css';
import TODO from './TODO'

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
