import React, { Component } from 'react';
import axios from 'axios'

class DeleteDeck extends Component {

    //On click, delete the deck and redirect
    handleClick = () => {
        var deckId = this.props.match.params.deckId
        console.log(deckId)
        axios.delete(`/api/user/:userId/deck/${deckId}`)
            .then(res => {
                var userId = this.props.match.params.userId
                console.log(userId)
                console.log(res)
                console.log(res.data)
                this.props.history.push(`/user/${userId}`)
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    DELETE THIS DECK
                </button>
            </div >
        );
    }
}

export default DeleteDeck;