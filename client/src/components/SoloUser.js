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
        axios.get(`/user/${userId}`).then(res => {
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
                <h1>{this.state.user.username}</h1>
                <br />
                {this.state.user.image}
                <br />
                <div>

                    <DeckList {...this.props} />
                </div>

            </div>
        );
    }
}

export default SoloUser;