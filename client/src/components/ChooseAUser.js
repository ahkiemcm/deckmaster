import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class ChooseAUser extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('/api/users').then(res => {
            this.setState({ users: res.data })
            console.log('res.data')
        })
    }

    render() {


        return (
            <div>
                <h3>
                    ChooseAUser:
                    {this.state.users.map((user) => (
                        { 'user': user }
                    ))}
                </h3>
                <h4>We should list all the users in this div</h4>



                <h4>If there's no user,<Link to='/user/new'> click here!</Link></h4>
            </div>
        );
    }
}

export default ChooseAUser;