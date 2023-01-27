import React from 'react';
import './App.css';
import cancel from './Image/cancel.png';

const TodoList = (props) => {

  return (
    <>
    <div className="itemlist">
        <img className='cancel'
        src={cancel} alt="cancel"
        onClick={() =>
        {props.onSelect(props.id)}
        }/>
    <li> {props.text} </li>
    </div>
    </>
  )
}

export default TodoList;