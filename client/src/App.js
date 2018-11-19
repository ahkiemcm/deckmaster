import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/Homepage';
import Navi from './components/Navi';
import SoloUser from './components/SoloUser'
import UserCreate from './components/UserCreate';
import DeckBuilder from './components/DeckBuilder';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navi />
          <Switch>
            {/* Deck Builder Page */}
            <Route exact path='/api/user/:userId/deck/:deckId' component={DeckBuilder} />
            {/* Create A User Page */}
            <Route exact path='/api/user/new' component={UserCreate} />
            {/* Solo User Page */}
            <Route exact path='/api/user/:userId' component={SoloUser} />
            {/* Homepage */}
            <Route path='/' component={Homepage} />
          </Switch>
          <div>
            <img src="#" alt="" />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
