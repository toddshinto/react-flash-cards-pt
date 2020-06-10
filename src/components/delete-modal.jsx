import React, { Component } from 'react';
import { AppContext } from './app-context';

export default class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.close();
    this.context.confirmDelete();
  }

  render() {
    const id = this.props.id;
    if (this.props.isOpen) {
      return (
        <div className="tint">
          <div className="custom-modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="text-left align-middle">
                  <h4>Confirm Delete</h4>
                </div>
                <div className="text-right">
                  <i onClick={this.props.close} className="fa fa-times" />
                </div>
              </div>
              <div className="modal-body">
                <h5>{this.context.cards[id].question}</h5>
                <p>{this.context.cards[id].answer}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.props.close}>Close</button>
                <button type="button" className="btn text-white btn-danger" onClick={this.handleDelete}>Confirm</button>
              </div>
            </div>
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
