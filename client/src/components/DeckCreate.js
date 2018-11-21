import React, { Component } from 'react';
import axios from 'axios'

class DeckCreate extends Component {
    state = {
        newDeck: {
            name: '',
            category: ''
        }
    }


    //Collect information from keystrokes.
    handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewDeck = { ...this.state.newDeck }

        // Event Target Name will be either 'name' or 'category'
        updatedNewDeck[event.target.name] = event.target.value
        this.setState({ newDeck: updatedNewDeck })
        console.log(this.state)
    }

    //When submit button is pressed, run this function to post the collected data to its respective user
    handleSubmit = () => {
        const userId = this.props.match.params.userId
        console.log(userId)
        console.log(this.state)
        // Make post to our api to create new deck
        axios.post(`/user/${userId}/deck`, this.state.newDeck);

    }

    render() {
        return (
            <div>
                <h2>Create a new deck:
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Deck Name: </label>
                        <input onChange={this.handleChange} value={this.state.newDeck.name} type="text" name="name" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="category">Category: </label>
                        <input onChange={this.handleChange} value={this.state.newDeck.category} type="text" name="category" />
                    </div>
                    <br />

                    <button type="submit">Create Deck</button>
                </form>
            </div>
        );
    }
}

export default DeckCreate;