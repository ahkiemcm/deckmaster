import React, { Component } from 'react';
import CardShowcase from './CardShowcase';
import DeleteDeck from './DeleteDeck';



class DeckBuilder extends Component {
    render() {
        return (
            <div>
                <h1>Name of the deck</h1>

                <div>
                    <CardShowcase />
                </div>
                <DeleteDeck {...this.props} />
            </div>
        );
    }
}




export default DeckBuilder;