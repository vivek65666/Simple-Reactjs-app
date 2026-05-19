import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers';
// CHANGED: Swapped BrowserRouter out for HashRouter
import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (
      // REMOVED: basename is no longer required when using HashRouter
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Simple React App</h1>
          </header>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/customerlist"/>
            )}/>
            <Route exact path='/customerlist' component={Customers} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;