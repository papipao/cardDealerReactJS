import React, { Component } from "react";
import Box from "./Box";

export class BoxContainer extends Component {
  static defaultProps = {
    nBoxes: 18,
    allColors: ["purple", "violet", "magenta", "pink"],
  };

  render() {
    const boxes = Array.from({ length: this.props.nBoxes }).map(() => <Box colors={this.props.allColors} />);
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
