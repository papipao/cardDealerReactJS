import React, { Component } from "react";
import ShoppingForm from "./ShoppingForm";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons" },
        { name: "Bread", qty: "3 loaves" },
      ],
    };
    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState((state) => ({
      items: [...state.items, item],
    }));
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map((item, idx) => (
          <li key={idx}>
            {item.name}: {item.qty}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
