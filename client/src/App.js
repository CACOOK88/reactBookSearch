import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={Search} />
          </Switch> 
        </div>
      </Router>
    );
  }
}

export default App;
