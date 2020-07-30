import React from "react";
import { Button, ListItem,Grid } from '@material-ui/core'



function Task(props) {

  return (
    <div>
      <ul>
        <ListItem className={props.checkStatus}>{props.name}
        </ListItem>
        <Button
        onClick={props.changeStatus}
        variant="contained" 
        color="primary">
          Done
        </Button>
        <Button 
        onClick={props.onDelete}
        variant="contained" 
        color="secondary">
          Delete
        </Button>
      </ul>
    </div>
  )
}

export default Task;
