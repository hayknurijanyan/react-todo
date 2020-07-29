import React, { Component } from 'react';
import Task from './task';

class Todos extends Component {

  render() { 
    return ( 
      <div className="column">
      <Task 
      name={this.props.value}
      id={this.props.id}/>
      </div>
     );
  }
}
 
export default Todos;