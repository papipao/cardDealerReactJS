import React, { Component } from "react";
import "./app.css";
import Deck from "./components/Deck/Deck";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Deck />
      </div>
    );
  }
}

export default App;
