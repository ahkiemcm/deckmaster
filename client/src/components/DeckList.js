import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class DeckList extends Component {

    state = {
        decks: []

    }

    // getDecks = () => {
    //     axios.get(`/api/user/${userId}/deck`).then((res) => {
    //         console.log(res)
    //         this.setState({ decks: res.data })
    //     })
    // }

    componentDidMount() {
        // this.getDecks() 
        const userId = this.props.match.params.userId
        axios.get(`/api/user/${userId}/deck`).then((res) => {
            console.log(res.data)
            this.setState({ decks: res.data })
        })
    }

    render() {
        return (
            <div>
                <h3>DeckList: I got all your decks</h3>
                {this.state.decks.map((deck) => (
                    <div key={deck._id}>
                        {deck.name}
                    </div>
                ))}

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