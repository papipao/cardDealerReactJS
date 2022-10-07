import React, { Component } from "react";
import Die from "./Die";

export class Roll extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = { die1: "five", die2: "six" };
  }

  roll = () => {
    const randRoll1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const randRoll2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    console.log(randRoll1);
    this.setState({ die1: randRoll1, die2: randRoll2 });
  };

  render() {
    return (
      <div className="Roll">
        <div className="Roll-container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll}>Roll</button>
      </div>
    );
  }
}

export default Roll;
