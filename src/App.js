import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';


function App() { 

  const[inputList, setInputList] = useState("");
  const[Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () =>{
    setItems((oldItems) =>{
      return [...oldItems, inputList ];
    });
    setInputList("")
  };

  const deleteItem = (id) => {
    // console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })

};

  return (
    <>
    <div className='maincontainer'>
      <div className='container'>
        <div className='todoback'>
          <h1 className='todotext'>Notes</h1>          
        </div>
        <input className='input' type="text" placeholder='Add an Item'
        value={inputList} onChange={itemEvent}/>
        <button className='addbtn' onClick={listOfItem}>Add</button>
        <ol className='list'>
          {/* <li> {inputList} </li> */}
         { Items.map((itemval, index) => {
          return <TodoList key={index} id={index} text={itemval} onSelect={deleteItem}/>
          })
          }
        </ol>
      </div>
    </div>
  </>
  

  );
}

export default App;
  