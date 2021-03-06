import React from 'react';
import { AppContext } from './app-context';
import DeleteModal from './delete-modal';

export default class ViewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currentId: 0
    };
    this.close = this.close.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ currentId: id, isOpen: true });
    this.context.setActiveCard(id);
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    const cards = this.context.cards;
    return (
      <>
        <div className="card-deck">
          {cards.map(card =>
            <div key={cards.indexOf(card)} className="col mb-4">
              <div className="card h-100 text-white">
                <div className="card-header bg-info">{card.question}</div>
                <div className="card-body bg-secondary">
                  <p className="card-text">{card.answer}</p>
                </div>
                <button type="button" className="text-center bg-warning card-footer text-white btn btn-warning" onClick={() => this.handleClick(cards.indexOf(card))}><i className="fas fa-trash" /></button>
              </div>
            </div>)}
        </div>
        <DeleteModal close={this.close} isOpen={this.state.isOpen} id={this.state.currentId}/>
      </>
    );
  }
}

ViewCards.contextType = AppContext;
