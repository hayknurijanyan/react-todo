import React from "react";
import "../Main.css";
import { Input as InputUi, Button } from '@material-ui/core';

function Input(props) {
  return (
    <div>
      <InputUi
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Enter your task"
      ></InputUi>
      <Button
        variant="contained"
        color="warning"
        onClick={props.addTask}>Add</Button>
    </div>
  );
}

export default Input;
