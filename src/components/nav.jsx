import React from 'react';
import { AppContext } from './app-context';

export default class Nav extends React.Component {
  render() {
    const view = this.context.currentView;
    return (
      <div className="row justify-content-end mt-3">
        <button
          type="button"
          className={`btn ${view === 'view-cards' ? 'btn-primary' : 'btn-light'}`}
          onClick={() => this.context.setView('view-cards')}>View Cards
        </button>
        <button
          type="button"
          className={`btn ${view === 'review-cards' ? 'btn-primary' : 'btn-light'}`}
          onClick={() => this.context.setView('review-cards')}>Review Cards
        </button>
        <button
          type="button"
          className={`btn ${view === 'create-card' ? 'btn-primary' : 'btn-light'}`}
          onClick={() => this.context.setView('create-card')}>Create Card
        </button>
      </div>
    );
  }
}

Nav.contextType = AppContext;
