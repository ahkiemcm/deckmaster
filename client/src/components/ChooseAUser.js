import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class ChooseAUser extends Component {
    state = {
        users: []
    }

    getAllUsers = () => {
        axios.get('/user').then((res) => {
            console.log(res)
            this.setState({ users: res.data })
        })
    }

    componentDidMount() {
        this.getAllUsers()
    }


    render() {


        return (
            <div>
                <h3>
                    Choose A User:
                {/* Show current users to choose from */}
                    {this.state.users.map((user) => (
                        <div key={user._id}>
                            <Link to={`/user/${user._id}`}>{user.username}</Link>
                        </div>
                    ))}
                </h3>




                <h4>If you don't have a user profile, <Link to='/user/new'> click here!</Link></h4>
            </div>
        );
    }
}

export default ChooseAUser;