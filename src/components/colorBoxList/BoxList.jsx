import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.removeBox = this.removeBox.bind(this);
    this.createBox = this.createBox.bind(this);
  }

  removeBox(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }

  createBox(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }

  render() {
    return (
      <div>
        <NewBoxForm createBox={this.createBox} />
        {this.state.boxes.map((box) => (
          <Box key={box.id} width={box.width} height={box.height} bgColor={box.bgColor} removeBox={() => this.removeBox(box.id)} />
        ))}
      </div>
    );
  }
}

export default BoxList;
