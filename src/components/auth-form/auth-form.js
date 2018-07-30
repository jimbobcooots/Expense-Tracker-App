import React from 'react';
import PropTypes from 'prop-types';

import './auth-form.scss';

const emptyState = {
  username: '',
  email: '',
  password: '',
};

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
  }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
      const name = this.state.username;
      event.preventDefault();
      this.setState(emptyState);
      this.setState({
        greeting: `Hi there ${name}`, 
      });
    }

  renderEmailInput = (type) => {
    return type === 'signup' && (
      <input 
        name="email"
        placeholder="email"
        type="email"
        value={ this.state.email }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    let { type } = this.props;
    type = type === 'login' ? type : 'signup';
    return (
      <form className="auth-form" onSubmit={ this.handleSubmit }>
        <h1>Login/Signup</h1>
        <input 
          name="username"
          placeholder="username"
          type="text"
          value={ this.state.username }
          onChange={ this.handleChange }
        />

        { this.renderEmailInput(type) }
        

        <input 
          name="password"
          placeholder="password"
          type="password"
          value={ this.state.password }
          onChange={ this.handleChange }
        />
        <button type="submit">{ type }</button>
        { this.state.greeting ? <h2>{this.state.greeting}</h2> : null } 
      </form>
    );
  }
}

AuthForm.propTypes = {
  onComplete: PropTypes.func,
  type: PropTypes.string,
};
