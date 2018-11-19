import React, { Component } from 'react';
import DeckList from './DeckList';

class SoloUser extends Component {
    state = {
        user: {
            username: '',
            decks: []
        }
    }

    //     We will populate data from our database to display the user's information, and list
    // the decks available at the user's disposal
    // getCurrentUser =

    render() {
        return (
            <div>
                <h1>SoloUser here</h1>
                {/* Show some info about the user here. Let's create a state and then map the information based on userId. */}
                <DeckList />

            </div>
        );
    }
}

export default SoloUser;