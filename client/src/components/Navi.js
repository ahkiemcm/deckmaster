import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navi extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li> <Link to='/'>Homepage</Link></li>
                    <li>User Page</li>
                    <li>Deck Construction</li>
                    <li>Card List Page</li>
                </ul>
            </div>
        );
    }
}

export default Navi;