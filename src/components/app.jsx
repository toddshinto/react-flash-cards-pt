import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import { AppContext } from './app-context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: []
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveCards = this.saveCards.bind(this);
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

  render() {
    return (
      <AppContext.Provider value={{ setView: this.setView, addCard: this.addCard, currentView: this.state.view }}>
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

export default App;
