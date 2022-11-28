import React, { Component } from "react";

class ShoppingForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: "", qty: "" });
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="qty">Qty:</label>
        <input type="text" name="qty" value={this.state.qty} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ShoppingForm;
