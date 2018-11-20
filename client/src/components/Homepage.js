import React, { Component } from 'react';
import ChooseAUser from './ChooseAUser';
import styled from 'styled-components'
import splash from '../img/yu-gi-oh-yugi-and-monsters-i30571.jpg'

const Splash = styled.div`
margin-left: 300px;
height: 600px;
width: 480px;
/* background-color: gray; */
border: dashed black;
background-image: url(${splash});
`

class Homepage extends Component {
    render() {
        return (
            <div>
                <Splash />
                <h1>Welcome to -DeckMaster-</h1>
                <ChooseAUser />
            </div>
        );
    }
}

export default Homepage;