import React, { Component } from "react";

export class Coin extends Component {
  render() {
    return <img src={this.props.info.imgSrc} alt={this.props.info.side} rel="noreferrer" />;
  }
}

export default Coin;
