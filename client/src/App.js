import React, { Component } from 'react';

import Homepage from './components/Homepage';
import Navi from './components/Navi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <Homepage />
      </div>
    );
  }
}

export default App;
