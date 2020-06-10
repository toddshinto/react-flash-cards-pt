import React from 'react';
import { AppContext } from './app-context';

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      id: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleReset() {
    this.setState({
      question: '',
      answer: '',
      id: this.state.id + 1
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const card = {
      question: this.state.question,
      answer: this.state.answer,
      id: this.state.id
    };
    this.context.addCard(card);
    this.handleReset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="col-4 justify-content-center">
        <div className={`form-group border rounded-lg p-5 text-white ${this.state.question ? 'bg-info' : 'bg-secondary'}`}>
          <textarea
            className={'form-control '}
            onChange={this.handleChange}
            placeholder="Question"
            name="question"
            id="question"
            value={this.state.question} />
        </div>
        <div className={`form-group border rounded-lg p-5 text-white ${this.state.answer ? 'bg-info' : 'bg-secondary'}`}>
          <textarea
            className="form-control"
            onChange={this.handleChange}
            placeholder="Answer"
            name="answer"
            id="answer"
            value={this.state.answer} />
        </div>
        <button type="submit" className={`btn text-white ${this.state.question && this.state.answer ? 'btn-success' : 'btn-danger'}`}>Submit</button>
      </form>
    );
  }
}

CreateCard.contextType = AppContext;
