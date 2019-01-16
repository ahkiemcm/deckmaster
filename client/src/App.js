import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import SoloUser from './components/SoloUser'
import UserCreate from './components/UserCreate';
import DeckBuilder from './components/DeckBuilder';
import styled from 'styled-components'
import logo from './img/Milennium_Ring_Icon_Colored.png'


const Body = styled.div`
background-color: #D1C4E9;
color: black;
height: 100%;
width: cover;
border: solid thick black;
`
const MasterLogo = styled.div`
margin-left: 600px;
height: 200px;
width: 200px;
background-color: gray;
border: rgb(0,0,0, .4) solid 12px;
background-image: url(${logo});
`



class App extends Component {
  render() {
    return (
      <Router>
        <Body>
          <Link to='/'>
            <MasterLogo />
          </Link>
          <Switch>
            {/* Deck Builder Page */}
            <Route exact path='/user/:userId/deck/:deckId' component={DeckBuilder} />
            {/* Create A User Page */}
            <Route exact path='/user/new' component={UserCreate} />
            {/* Solo User Page */}
            <Route exact path='/user/:userId' component={SoloUser} />
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
