import React, { Component } from 'react';
import axios from 'axios'

class DeleteDeck extends Component {


    handleClick = () => {

        axios.delete(`/user/${this.props.match.params.deckId}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                this.props.history.push('/')
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    DELETE THIS DECK
                </button>
            </div>
        );
    }
}

export default DeleteDeck;