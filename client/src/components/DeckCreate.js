import React, { Component } from 'react';
import axios from 'axios'

class DeckCreate extends Component {
    state = {
        newDeck: {
            name: '',
            category: ''
        }
    }

    handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewDeck = { ...this.state.newDeck }

        // Event Target Name will be either 'name' or 'category'
        updatedNewDeck[event.target.name] = event.target.value
        this.setState({ newDeck: updatedNewDeck })
        console.log(this.state)
    }


    handleSubmit = (event) => {
        // event.preventDefault()
        const userId = this.props.match.params.userId
        console.log(userId)
        console.log(this.state)
        // Make post to our api to create new deck
        axios.post(`/user/${userId}/deck`, this.state.newDeck);
        console.log('Axios suxx')
        // .then(res => {
        //     // when we get that data back, we need to navigate to the new deck's page
        //     console.log(res.data)
        //     this.props.history.push(`/user/${userId}/deck/${res.data._id}`)
        // })

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