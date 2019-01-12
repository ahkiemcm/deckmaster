// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import DeckCreate from './DeckCreate';
// import styled from 'styled-components'
// import axios from 'axios'


// const DeckBox = styled.div`
// border: rgb(0,0,0, .6) 10px ridge;
// `



// class DeckList extends Component {

//     state = {
//         decks: []

//     }

//     componentDidMount() {
//         // Get decks and set the state to contain the response data.
//         const userId = this.props.match.params.userId
//         axios.get(`/api/user/${userId}/deck`).then((res) => {
//             console.log(res.data)
//             this.setState({ decks: res.data })
//         })
//     }

//     render() {
//         return (
//             <DeckBox>
//                 <h2>Deck List</h2>
//                 {this.state.decks.map((deck) => (

//                     <div key={deck._id}>
//                         <Link to={`/user/${this.props.match.params.userId}/deck/${deck._id}`}>
//                             {deck.name}
//                         </Link>
//                     </div>
//                 ))}
//                 <DeckCreate {...this.props} />
//             </DeckBox>
//         );
//     }
// }

// export default DeckList;