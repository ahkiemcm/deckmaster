import React, { Component } from 'react';
// import DeckList from './DeckList';
import DeleteUser from './DeleteUser'

import { Link } from 'react-router-dom'
import DeckCreate from './DeckCreate';
import styled from 'styled-components'

import axios from 'axios'

const DeckBox = styled.div`
border: rgb(0,0,0, .6) 10px ridge;
`


class SoloUser extends Component {
    state = {

        user: {
            decks: []
        }
    }

    currentUser = () => {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/api/user/${userId}`).then(res => {
            this.setState({ user: res.data })
            // console.log(res)
            // console.log(this.state)
        })
    }

    // We will populate data from our database to display the user's information, and list
    // the decks available at the user's disposal
    componentDidMount = () => {
        this.currentUser()
    }

    componentDidMount() {
        // Get decks and set the state to contain the response data.
        const userId = this.props.match.params.userId
        axios.get(`/api/user/${userId}/deck`).then((res) => {
            console.log(res.data)
            this.setState({ decks: res.data })
        })
    }

    render() {
        return (
            <div>

                {/* Shows some info about the user here. */}
                <h1>{this.state.user.username}</h1>
                <br />
                {this.state.user.image}
                <br />
                <DeckBox>
                    <h2>Deck List</h2>
                    {this.state.user.decks.map((deck) => (

                        <div key={deck._id}>
                            <Link to={`/user/${this.props.match.params.userId}/deck/${deck._id}`}>
                                {deck.name}
                            </Link>
                        </div>
                    ))}
                    <DeckCreate {...this.props} />
                </DeckBox>
                <DeleteUser {...this.props} />
            </div>
        );
    }
}
export default SoloUser;