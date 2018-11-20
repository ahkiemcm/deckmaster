import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
// import styled from 'styled-components'




class DeckList extends Component {

    state = {
        decks: []

    }

    componentDidMount() {
        // Get decks 
        const userId = this.props.match.params.userId
        axios.get(`/user/${userId}/deck`).then((res) => {
            console.log(res.data)
            this.setState({ decks: res.data })
        })
    }

    render() {
        return (
            <div>
                <h3>Deck List</h3>
                {this.state.decks.map((deck) => (

                    <div key={deck._id}>
                        <Link to={`/user/:userId/deck/${deck._id}`}>
                            {deck.name}
                        </Link>
                    </div>
                ))}

            </div>
        );
    }
}

export default DeckList;