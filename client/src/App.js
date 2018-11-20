import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/Homepage';
import Navi from './components/Navi';
import SoloUser from './components/SoloUser'
import UserCreate from './components/UserCreate';
import DeckBuilder from './components/DeckBuilder';
import styled from 'styled-components'


const Body = styled.div`
background-color: #D1C4E9;
color: gold;
height: 95vh;
width: 95vw;
border: solid thick black;
`
const Logo = styled.div`
height: 300px;
width: 300px;
background-image: url('');
`



class App extends Component {
  render() {
    return (
      <Router>
        <Body>
          <Logo />
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

        </Body>
      </Router>
    );
  }
}

export default App;
