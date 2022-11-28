import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      bgColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: new Date().getTime().toString(36) };
    this.props.createBox(newBox);
    this.setState({
      width: "",
      height: "",
      bgColor: "",
    });
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
        <div>
          <label htmlFor="width">Width: </label>
          <input type="text" name="width" value={this.state.width} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input type="text" name="height" value={this.state.height} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="bgColor">Background Color: </label>
          <input type="text" name="bgColor" value={this.state.bgColor} onChange={this.handleChange} />
        </div>
        <button type="submit">Add Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
