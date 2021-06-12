import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/home' exact component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

