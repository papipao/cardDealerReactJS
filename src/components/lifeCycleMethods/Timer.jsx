import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    console.log("in constructor");
  }

  componentDidMount() {
    console.log("in componentDidMount");
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    console.log("in render");
    return <div>{this.state.time.getSeconds()}</div>;
  }
}

export default Timer;
