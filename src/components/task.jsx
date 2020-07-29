import React from "react";
import { Button, ListItem } from '@material-ui/core'



function Task(props) {

  return (
    <div>
      <ul>
        <ListItem className="list">{props.name}
        </ListItem>
        <Button variant="contained" color="primary">
          Done
        </Button>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </ul>
    </div>
  )
}

export default Task;
