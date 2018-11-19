import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navi extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li> <Link to='/'>Homepage</Link></li>

                </ul>
            </div>
        );
    }
}

export default Navi;