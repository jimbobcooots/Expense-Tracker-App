import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import AuthForm from '../auth-form/auth-form';

import './app.scss';


export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="expense-container">
            <header>
              <h1>Expense Tracker</h1>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/auth-form">Login/Signup</Link></li>
                </ul>
              </nav>
            </header>
            <Route 
              exact
              path="/"
            />
            <Route 
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <Route 
              exact
              path="/auth-form"
              component={AuthForm}
            />
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}
