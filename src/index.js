import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import HomePage from './components/HomePage';
import store from './reducers/index';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
