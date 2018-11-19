import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class DeckList extends Component {
    render() {
        return (
            <div>
                <h3>DeckList: I got all your decks</h3>
                {/* We are gonna need to fix our controller for this one. We will get assistance for this... */}
                {/* But we are gonna show all decks that belong to the user based on the user's Id. */}
                <Link to='/api/user/:userId/deck/:deckId'>
                    <h4>Look, here's one now!</h4>
                </Link>
            </div>
        );
    }
}

export default DeckList;