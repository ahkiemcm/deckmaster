import React, { Component } from 'react';
import DeckList from './DeckList';
import axios from 'axios'

class SoloUser extends Component {
    state = {

        user: {}
    }

    currentDecks = () => {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/api/user/${userId}`).then(res => {
            this.setState({ user: res.data })
            console.log(res)
            console.log(this.state)
        }


        )
    }



    //     We will populate data from our database to display the user's information, and list
    // the decks available at the user's disposal
    componentDidMount = () => {
        this.currentDecks()

    }


    render() {
        return (
            <div>

                {/* Show some info about the user here. Let's create a state and then map the information based on userId. */}
                {this.state.user.username}
                <br />
                {this.state.user.image}
                <br />
                {/* {this.state.user.decks} */}
                <DeckList {...this.props} />

            </div>
        );
    }
}

export default SoloUser;