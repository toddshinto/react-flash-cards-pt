import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import { AppContext } from './app-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: [],
      activeCard: {}
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  setView(hello) {
    this.setState(state => {
      return { view: hello };
    });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  componentDidMount() {
    this.setState({ cards: JSON.parse(localStorage.getItem('flash-cards')) });
  }

  confirmDelete() {
    const newDeck = this.state.cards.slice(0, this.state.cards.length);
    const deleteDeck = newDeck.filter(card => card !== this.state.activeCard);
    this.setState(
      { cards: deleteDeck, activeCard: {} },
      () => this.saveCards()
    );
  }

  saveCards() {
    const cards = JSON.stringify(this.state.cards);
    localStorage.setItem('flash-cards', cards);
  }

  addCard(card) {
    const newDeck = this.state.cards.slice(0, this.state.cards.length);
    newDeck.push(card);
    this.setState(
      { cards: newDeck },
      () => this.saveCards()
    );
  }

  setActiveCard(index) {
    if (index > 0) {
      this.setState(state => {
        return {
          activeCard: state.cards[index]
        };
      });
    } else {
      this.setState({ activeCard: this.state.cards[0] });
    }
  }

  render() {
    return (
      <AppContext.Provider value={{
        setView: this.setView,
        addCard: this.addCard,
        currentView: this.state.view,
        cards: this.state.cards,
        activeCard: this.state.activeCard,
        setActiveCard: this.setActiveCard,
        confirmDelete: this.confirmDelete
      }}>
        <h1 className="text-center">Flash Card App</h1>
        <div>
          <Nav />
          <div className="row justify-content-center mt-3 col-l-12">
            {this.getView()}
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}
