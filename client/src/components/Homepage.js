import React, { Component } from 'react';
import ChooseAUser from './ChooseAUser';

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to -DeckMaster-</h1>
                <ChooseAUser />
            </div>
        );
    }
}

export default Homepage;