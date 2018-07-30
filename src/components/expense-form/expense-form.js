import React from 'react';
import PropTypes from 'prop-types';

import './expense-form.scss';

const defaultState = {
  name: '',
  amount: 0,
  date: '',
  category: '',
  description: '',
  editing: false,
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddExpense(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } data-cy="expense-form" className="expense-form">
        <input 
          type="text"
          name="name"
          placeholder="name"
          value={ this.state.value }
          onChange={ this.handleChange }
          // data-cy={name}
        />
        <input
          type="number"
          min="0.00" 
          step="0.01"
          name="amount"
          placeholder="enter an amount"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          type="date"
          name="date"
          placeholder="date"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          name="category"
          placeholder="category"
          value={ this.state.value }
          onChange={ this.handleChange }
          // data-cy={category}
        />
        <input 
          type="text"
          name="description"
          placeholder="description"
          value={ this.state.value }
          onChange={ this.handleChange }
          // data-cy={description}
        />
        <button type="submit" className="create-expense">Create Expense</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  handleAddExpense: PropTypes.func,
  onComplete: PropTypes.func,
  expense: PropTypes.object,
};
