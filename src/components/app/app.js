import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';

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
                </ul>
              </nav>
            </header>
            <Route 
              exact
              path="/"
              component={() => <h4>You must only create expenses that pertain to medieval times</h4>}
            />
            <Route 
              exact
              path="/dashboard"
              component={Dashboard}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
