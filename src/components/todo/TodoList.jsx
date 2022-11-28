import React, { Component } from "react";
import "./TodoList.css";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      isEditing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.name);
    this.setState({
      isEditing: false,
    });
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            <button type="submit">Update</button>
          </form>
        </div>
      );
    } else {
      result = (
        <ul>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.props.removeTodo}>X</button>
          <li className={this.props.isCompleted ? "complete" : ""} onClick={this.props.toggleName}>
            {this.props.name}
          </li>
        </ul>
      );
    }
    return result;
  }
}

export default TodoList;
