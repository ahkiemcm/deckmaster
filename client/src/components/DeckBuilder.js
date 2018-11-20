import React, { Component } from 'react';
import CardShowcase from './CardShowcase';
// import axios from 'axios'


class DeckBuilder extends Component {
    render() {
        return (
            <div>
                <h1>Name of the deck</h1>
                <CardShowcase />
            </div>
        );
    }
}

//     state = {

//         user: {}
//     }

//     currentUser = () => {
//         // make an api call to get one single user
//         // On the server URL is '/api/users/:userId'
//         const userId = this.props.match.params.userId
//         axios.get(`/user/${userId}`).then(res => {
//             this.setState({ user: res.data })
//             console.log(res)
//             console.log(this.state)
//         }


//         )
//     }



//     //     We will populate data from our database to display the user's information, and list
//     // the decks available at the user's disposal
//     componentDidMount = () => {
//         this.currentuser()

//     }


//     render() {
//         return (
//             <div>

//                 {/* Shows some info about the user here. */}
//                 <h1>{this.state.user.username}</h1>
//                 <br />
//                 {this.state.user.image}
//                 <br />
//                 <div>

//                     {/* <DeckList {...this.props} /> */}
//                 </div>

//             </div>
//         );
//     }
// }


export default DeckBuilder;