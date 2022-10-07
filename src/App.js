import React, { Component } from "react";
import "./app.css";
import Roll from "./components/dice/Roll";

export class App extends Component {
  render() {
    return (
      <div>
        <Roll />
      </div>
    );
  }
}

export default App;
