import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <>
        <button type="button" onClick={() => this.props.setView('view-cards')}>View Cards</button>
        <button type="button" onClick={() => this.props.setView('review-cards')}>Review Cards</button>
        <button type="button" onClick={() => this.props.setView('create-card')}>Create Card</button>
      </>
    );
  }
}

export default Nav;
