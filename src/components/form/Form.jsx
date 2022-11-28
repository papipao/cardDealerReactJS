import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert(`you typed: ${this.state.username} 
    ${this.state.email}
    ${this.state.password}`);
    this.setState({ username: "", email: "", password: "" });
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <button type="submit">Click</button>
        </form>
      </div>
    );
  }
}

export default Form;
