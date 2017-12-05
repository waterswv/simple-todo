import React, { Component } from 'react';
import ToDoForm from './ToDoForm.js'
import ToDoList from './ToDoList.js'
import './App.css';

// This is a stateless function ... another way of creating a class component
const ToDoItem = ({props}) => (
  <li>{props.text}</li>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newToDO: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newToDo];
    this.setState({todos, newToDo: ''});
  }
  render() {
    const {newToDo} = this.state;
    const todos = this.state.todos.map((td, index) => (
      <ToDoItem key={index} text={td}/>
    ));
    return (
      <div className="App">
        <header>
          Bryan's To Do List
        </header>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newToDo"
            placeholder="What needs to be done"
            value={newTodo}
            onChange={(e) => this.setState({[e.target.name]: e.target.value})}
          />
        <button
          type="button"
          className="save-button"
          >
          Save
        </button>
        </form>
      <div className="todo-content">
        <ol>
          {todos}
        </ol>
      </div>
      </div>
    );
  }
}

export default App;
