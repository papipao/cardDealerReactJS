import React, { Component } from "react";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: new Date().getTime().toString(36) };
    this.props.createTodo(newTodo);
    this.setState({
      name: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
