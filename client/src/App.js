import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import Navi from './components/Navi';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navi />
          <Switch>
            <Route path='/' component={Homepage} />
          </Switch>
          {/* <Homepage /> */}
        </div>
      </Router>
    );
  }
}

export default App;
