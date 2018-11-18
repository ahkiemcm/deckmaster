import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/Homepage';
import Navi from './components/Navi';
import SoloUser from './components/SoloUser'
import UserCreate from './components/UserCreate';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navi />
          <Switch>
            <Route exact path='/user/new' component={UserCreate} />
            <Route exact path='/user/:id' component={SoloUser} />
            <Route path='/' component={Homepage} />
          </Switch>
          <img src="#" alt="" />

        </div>
      </Router>
    );
  }
}

export default App;
