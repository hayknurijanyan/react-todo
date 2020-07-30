import React, { Component } from "react";
import "../Main.css";
import Input from "./input";
import Todos from "./todos";
import Navbar from "./navbar";


class Main extends Component {
  state = {
    todos: [],
    value: "",
  };


  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  handleSubmit = () => {
    
    let todos = [...this.state.todos];
    const newTask = this.state.value;
    let newId = 0;

    if(!(this.state.value)){alert("Please Enter a Task")
  }else
  {
    if (todos.length===0){todos.push({ id: newId, content: newTask, status:false })
    this.setState({ todos,value:"" });   
  }else
  {
    this.state.todos[0].id ? (newId = this.state.todos[0].id + 1) : (newId = 1);
    todos.unshift({ id: newId, content: newTask });
    this.setState({ todos,value:"" });  
  }}
};

  handleDelete=(id)=> {
    let todos = this.state.todos.filter(el=> el.id !==id)
    this.setState({todos})
}
  handleStatus=(el)=>{
    if (el.status) {el.status=false}
    else {el.status =true}
    this.setState({todos:this.state.todos})

}

  // handleEnter = (e) => {
  //   console.log('hello')
  //   if (e.keyCode === 13) {
  //     console.log('do validate')
  //   }
  // }


  render() {
    return (
      <>
      <Navbar/>
        <h2>Task List</h2>

        <Input
          value={this.state.value}
          onChange={this.handleChange}
          addTask={this.handleSubmit}
          keyDown={this.handleEnter} />

        <div className="container">
        {this.state.todos.map((el) => (
          <Todos key={el.id}
          onDelete={() => this.handleDelete(el.id)}
          changeStatus={()=>this.handleStatus(el)} 
          value={el.content} 
          checkStatus={(el.status?"completed":"list")}
          />
        ))}
        </div>
      </>
    );
  }
}

export default Main;
