import React from 'react';
import { AppContext } from './app-context';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 'front'
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.context.setActiveCard(0);
  }

  render() {
    return <h1>Review Cards</h1>;
  }
}

ReviewCards.contextType = AppContext;
