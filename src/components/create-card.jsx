import React from 'react';
import { AppContext } from './app-context';

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleReset() {
    this.setState({
      question: '',
      answer: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };
    this.context.addCard(card);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Question</label>
        <input onChange={this.handleChange} type="text" placeholder="Question" name="question"></input>
        <label>Answer</label>
        <input onChange={this.handleChange} type="text" placeholder="Answer" name="answer"></input>
      </form>
    );
  }
}

CreateCard.contextType = AppContext;
export default CreateCard;
