import React from 'react';
import { AppContext } from './app-context';

export default class ViewCards extends React.Component {
  render() {
    const cards = this.context.cards;
    return (
      <div className="card-deck">
        {cards.map(card =>
          <div key={cards.indexOf(card)} className="col mb-4">
            <div className="card h-100 text-white">
              <div className="card-header bg-primary">{card.question}</div>
              <div className="card-body bg-info">
                <p className="card-text">{card.answer}</p>
              </div>
              <div className="card-footer bg-warning text-center"><i className="fas fa-trash" /></div>
            </div>
          </div>)}
      </div>
    );
  }
}

ViewCards.contextType = AppContext;
