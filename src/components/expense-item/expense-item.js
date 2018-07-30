import React from 'react';
import PropTypes from 'prop-types';/*eslint-disable-line*/

import './expense-item.scss';

export default class ExpenseItem extends React.Component {
  render() {
    const { expense, handleRemoveExpense } = this.props; /*eslint-disable-line*/
    return (
      <div className="expense-item" data-cy="expense-item">
        <strong className="expense-name">{expense.name}</strong>
          <ul className="expense-list">
            <li className="expense-date">{expense.date}</li>
            <li className="expense-category">{expense.category}</li>
            <li className="expense-description">{expense.description}</li>
          </ul>
          <span className="amount">${expense.amount.toLocaleString({ style: 'currency' })}</span>
      <button
          className="delete-button"
          onClick = {() => handleRemoveExpense(expense)} 
          data-cy="expense-item-delete">
          X
      </button>
      </div>
    );
  }
}
