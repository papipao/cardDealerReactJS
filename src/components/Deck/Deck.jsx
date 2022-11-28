import React, { Component } from "react";
import Card from "./Card";
import "./Deck.css";

const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawn: [],
    };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    const res = await fetch(`${API_BASE_URL}/new/shuffle`);
    const data = await res.json();
    console.log(data);
    this.setState({ deck: data });
  }

  async getCard() {
    let deck_id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      let res = await fetch(`${cardUrl}`);
      let data = await res.json();
      if (!data.success) {
        throw new Error("No card remaining");
      }
      let card = data.cards[0];
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} OF ${card.suit}`,
          },
        ],
      }));
    } catch (e) {
      alert(e);
    }
  }

  render() {
    return (
      <div className="Deck">
        <h1 class="Deck-title">Card Dealer</h1>
        <div className="btnF">
          <button onClick={this.getCard}>Get Card</button>
        </div>
        <div className="Deck-cardarea">
          {this.state.drawn.map((c) => (
            <Card key={c.id} name={c.name} image={c.image} />
          ))}
        </div>
      </div>
    );
  }
}

export default Deck;
