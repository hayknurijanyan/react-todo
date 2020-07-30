import React, { Component } from 'react';
import Task from './task';

class Todos extends Component {

  render() { 
    return ( 
      <div className="column">
      <Task
      onDelete={this.props.onDelete}
      changeStatus={this.props.changeStatus}
      name={this.props.value}
      id={this.props.id}
      checkStatus={this.props.checkStatus}/>
      </div>
     );
  }
}
 
export default Todos;