import React, { Component } from "react";
import "./ZenQuote.css";
class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "", isLoaded: false };
    console.log("in constructor");
  }

  async componentDidMount() {
    console.log("in componentDidMount");
    const res = await fetch(`https://swapi.dev/api/films/1`);
    const data = await res.json();
    setTimeout(
      function () {
        this.setState({
          quote: data.title,
          isLoaded: true,
        });
      }.bind(this),
      3000
    );
  }

  componentDidUpdate() {
    console.log("in componentDidUpdate");
  }

  render() {
    console.log("in render");
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    );
  }
}

export default ZenQuote;
