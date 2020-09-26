
import React, { useState } from "react";
import "./index.css";
import {v4 as uuid4} from "uuid";
import List from "./List";
import Controller from "./Controller";


function App() {

  const [list, setList] = useState([
    {id: uuid4(), counter: 3},
    {id: uuid4(), counter: 33},
    {id: uuid4(), counter: 13}
  ]);

  const addCounter = (value) =>{
    const newList = [...list, {id: uuid4(), counter: Number(value)}];
    setList(newList);
  }

  const moveCounter = (currentIndex, nextIndex ) =>{
    const newList = [...list];

    const currentEl = newList[currentIndex];
    const prevEl = newList[nextIndex];
    newList[currentIndex] = prevEl;
    newList[nextIndex] = currentEl;
    setList(newList);
  }

  const counterChange = (id, value) =>{
    const newList = list.map(el =>{
      if(el.id === id){return {...el, counter: el.counter + value}}
      else{return el}
    });
    setList(newList);
  }

  const saveCounter = (id, value)=>{
    const newList = list.map(el =>{
      if(el.id === id){return {...el, counter: Number(value)};}
      else{return el}
    });
    setList(newList);
  }

  return (
      <div className="App">
        <Controller addCounter={addCounter}/>
        <hr/>
        <List list={list}
              moveCounter={moveCounter}
              counterChange={counterChange}
              saveCounter={saveCounter}/>
      </div>
  );
}

export default App;