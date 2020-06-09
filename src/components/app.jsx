import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: []
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
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
    const newDeck = this.state.cards.splice(0, this.state.cards.length);
    newDeck.push(card);
    this.setState(newDeck, () => this.saveCards());
  }

  render() {
    console.log(this.state.cards);
    return (
      <>
        <h1 className="text-center">Flash Card App</h1>
        <div>
          <Nav setView={this.setView} />
          {this.getView()}
        </div>
      </>
    );
  }
}

export default App;
