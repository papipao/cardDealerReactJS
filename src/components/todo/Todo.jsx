import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.createTodo = this.createTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleName = this.toggleName.bind(this);
  }

  createTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todos) => todos.id !== id),
    });
  }

  updateTodo(id, updatedTodo) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: updatedTodo };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  }

  toggleName(id) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    this.setState({
      todos: todos,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("in componentDidUpdate");
    console.log(prevState.todos);
    console.log(this.state.todos);
  }

  render() {
    console.log(this.props.isCompleted);
    return (
      <div>
        <h1>To do List</h1>
        {this.state.todos.map((todo) => (
          <TodoList
            key={todo.id}
            id={todo.id}
            name={todo.name}
            removeTodo={() => this.removeTodo(todo.id)}
            updateTodo={this.updateTodo}
            isCompleted={todo.isCompleted}
            toggleName={() => this.toggleName(todo.id)}
          />
        ))}
        <TodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default Todo;
