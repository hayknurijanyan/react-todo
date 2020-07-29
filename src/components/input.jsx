import React from "react";
import "../Main.css";
import { Input as InputUi, Button, Grid } from '@material-ui/core';

function Input(props) {
  return (
    <div>
      <Grid container justify="center">
        <InputUi
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder="Enter your task" />
        <Button
          variant="contained"
          onKeyDown={props.keyDown}
          onClick={props.addTask}>
          Add
        </Button>
      </Grid>
    </div>
  );
}

export default Input;
