import React, { Component } from 'react';
import CardShowcase from './CardShowcase';

class DeckBuilder extends Component {
    render() {
        return (
            <div>
                <h1>DeckBuilder: I have a name and I am either a main, side, or extra deck.</h1>
                <CardShowcase />
            </div>
        );
    }
}

export default DeckBuilder;