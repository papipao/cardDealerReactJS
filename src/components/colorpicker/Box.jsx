import React, { Component } from "react";
import { choice } from "../coin/helpers";
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors),
    };
  }

  pickColor = () => {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  };

  handleClick = () => {
    this.pickColor();
  };

  render() {
    return <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}></div>;
  }
}

export default Box;
