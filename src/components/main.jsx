import React, { Component } from "react";
import "../Main.css";
import Input from "./input";
import Todos from "./todos";

class Main extends Component {
  state = {
    todos: [
      { id: 2, content: "Complete Todo Homework" },
      { id: 1, content: "Learn Redux" },
    ],
    value: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  addTask = () => {
    const newTask = this.state.value;
    let newId = 0;
    this.state.todos[0].id ? (newId = this.state.todos[0].id + 1) : (newId = 1);
    let todos = [...this.state.todos];
    todos.unshift({ id: newId, content: newTask });
    this.setState({ todos });
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="container">
        <h2>To Do List</h2>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
          addTask={this.addTask} />
        {this.state.todos.map((el) => (
          <Todos key={el.id} value={el.content} />
        ))}
      </div>
    );
  }
}

export default Main;
