import React from 'react';
import { AppContext } from './app-context';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      side: 'front'
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.context.setActiveCard(this.state.currentCard);
  }

  nextCard() {
    if (this.state.currentCard === this.context.cards.length - 1) {
      this.setState({ currentCard: 0 });
    } else {
      this.setState({ currentCard: this.state.currentCard + 1 });
    }
    this.context.setActiveCard(this.state.currentCard);
  }

  previousCard() {
    if (this.state.currentCard === 0) {
      this.setState({ currentCard: this.context.cards.length - 1 });
    } else {
      this.setState({ currentCard: this.state.currentCard - 1 });
    }
    this.context.setActiveCard(this.state.currentCard);
  }

  render() {
    return <h1>Review Cards</h1>;
  }
}

ReviewCards.contextType = AppContext;
