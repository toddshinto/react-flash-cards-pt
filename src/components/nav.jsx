import React from 'react';
import { AppContext } from './app-context';

class Nav extends React.Component {
  render() {
    return (
      <>
        <button type="button" onClick={() => this.context.setView('view-cards')}>View Cards</button>
        <button type="button" onClick={() => this.context.setView('review-cards')}>Review Cards</button>
        <button type="button" onClick={() => this.context.setView('create-card')}>Create Card</button>
      </>
    );
  }
}
Nav.contextType = AppContext;
export default Nav;
