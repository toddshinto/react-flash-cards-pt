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
      return this.setState({ currentCard: 0 });
    } else {
      return this.setState({ currentCard: this.state.currentCard + 1 });
    }
  }

  render() {
    return <h1>Review Cards</h1>;
  }
}

ReviewCards.contextType = AppContext;
