import React, { Component } from "react";
import "./app.css";
import NumberItem from "./components/state/NumberItem";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5],
    };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    this.setState({
      nums: this.state.nums.filter((n) => n !== num),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Numberlist</h1>
        <ul>
          {this.state.nums.map((n, idx) => (
            <NumberItem key={idx} val={n} remove={this.remove} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
