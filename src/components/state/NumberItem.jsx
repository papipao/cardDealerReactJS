import React, { Component } from "react";

class NumberItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.val);
  }

  render() {
    return (
      <li>
        {this.props.val}
        <button onClick={this.handleRemove}>x</button>
      </li>
    );
  }
}

export default NumberItem;
