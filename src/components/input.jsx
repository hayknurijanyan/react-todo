import React from 'react';
import '../Main.css'

function Input (props){
    return (
        <div>
        <input type="text" value={props.value} onChange={props.onChange} placeholder="Enter your task">
        </input>
        <button onClick={props.addTask}>
            Add
        </button>
        </div>
    )
}

export default Input; 