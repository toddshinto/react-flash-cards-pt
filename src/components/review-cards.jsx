import React from 'react';
import { AppContext } from './app-context';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      front: true
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
  }

  componentDidMount() {
    this.context.setActiveCard(this.state.currentCard);
  }

  handleClick() {
    this.setState({ front: !this.state.front });
  }

  nextCard() {
    if (this.state.currentCard === this.context.cards.length - 1) {
      this.setState({ currentCard: 0 });
    } else {
      this.setState({ currentCard: this.state.currentCard + 1 });
    }
    console.log('index after state update', this.state.currentCard);
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
    const card = this.context.activeCard;
    let side;
    if (card) {
      (this.state.front) ? side = card.question : side = card.answer;
    }
    return (
      <div id="card-carousel" className="carousel slide">
        <div className="card text-white" onClick={this.handleClick}>
          <div className={`card-body ${this.state.front ? 'bg-primary' : 'bg-info'}`}>
            <p className="card-text">{side}</p>
          </div>
        </div>
        <a className="carousel-control-prev" href="#card-carousel" role="button" onClick={this.previousCard}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous Card</span>
        </a>
        <a className="carousel-control-next" href="#card-carousel" role="button" onClick={this.nextCard}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next Card</span>
        </a>
      </div>
    );
  }
}

ReviewCards.contextType = AppContext;
