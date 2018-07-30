import React from 'react';
import uuid from 'uuid/v4';
import ExpenseForm from '../expense-form/expense-form';
import './dashboard.scss';
import ExpenseItem from '../expense-item/expense-item';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      error: null,
    };
  }

  handleAddExpense = (expense) => {
    if (expense.name === '') {
      return this.setState({ error: true });
    }

    expense.createdOn = new Date();
    expense._id = uuid();
    return this.setState((previousState) => {
      return {
        expenses: [...previousState.expenses, expense],
        error: null,
      };
    });
  }

  handleRemoveExpense = (expenseToRemove) => {
    this.setState((previousState) => {
      return {
        expenses: previousState.expenses.filter(expense => expense._id !== expenseToRemove._id),
      };
    });
  }

  handleUpdateExpense = (expenseToUpdate) => {
    return this.setState((previousState) => {
      return {
        expenses: previousState.expenses.map(expense => (expense._id === expenseToUpdate._id ? expenseToUpdate : expense)),
      };
    });
  }

  handleExpenses = () => {
    return (
      <ul className = "expense-list">
        {
          this.state.expenses.map((expense) => {
            return (
              <li key={expense._id}>
                <ExpenseItem
                  expense={expense}
                  handleRemoveExpense={this.handleRemoveExpense}
                  handleUpdateExpense={this.handleUpdateExpense}
                  />
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="dashboard">
        <ExpenseForm handleAddExpense = { this.handleAddExpense } />
        { 
          this.state.error && <h3 className="error">You must enter a name to the expense.</h3>
        }
        { this.handleExpenses() }
      </section>
    );
  }
}
