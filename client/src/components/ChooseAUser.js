import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ChooseAUser extends Component {
    render() {
        return (
            <div>
                <h3>ChooseAUser:
                        <Link to='/user/5bef3a96afe221030d9c8fe2'>Choose me!</Link>
                </h3>
                <h4>We should list all the users in this div</h4>
                <h3>If there's no user,<Link to='/user/new'> click here!</Link></h3>
            </div>
        );
    }
}

export default ChooseAUser;