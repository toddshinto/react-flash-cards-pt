import React, { Component } from 'react';
import { AppContext } from './app-context';

export default class DeleteModal extends Component {
  render() {
    const id = this.props.id;
    console.log(this.context);
    console.log(id);
    if (this.props.isOpen) {
      return (
        <div className="basic-modal" onClick={this.props.close}>
          <div onClick={e => e.stopPropagation()} className="basic-modal-content">
            <div onClick={this.props.close} className="basic-modal-close">X</div>
            <h1>{this.context.cards[id].question}</h1>
            <p>{this.context.cards[id].answer}</p>
          </div>
        </div>
      );
    }

    return (
      <></>
    );
  }
}

DeleteModal.contextType = AppContext;
