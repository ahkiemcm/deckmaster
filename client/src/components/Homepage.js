import React, { Component } from 'react';
import ChooseAUser from './ChooseAUser';
import styled from 'styled-components'
import splash from '../img/superSplash.jpg'

const Splash = styled.div`
margin-left: 180px;
height: 768px;
width: 1024px;
border: solid black 20px;
background-image: url(${splash});
`
const Welcome = styled.h1`
margin-left: 340px;
`

class Homepage extends Component {
    render() {
        return (
            <div>
                <Splash />
                <Welcome>Welcome to -DeckMaster-</Welcome>
                <ChooseAUser />
            </div>
        );
    }
}

export default Homepage;