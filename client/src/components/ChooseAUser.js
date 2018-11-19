import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class ChooseAUser extends Component {
    state = {
        users: []
    }

    // componentDidMount() {
    //     axios.get('/users').then(res => {
    //         this.setState({ users: res.data })
    //         console.log('res ')
    //     })
    // }

    getAllUsers = () => {
        axios.get('/api/user').then((res) => {
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
                    ChooseAUser:
                {/* Show current users to choose from */}
                    {this.state.users.map((user) => (
                        <div key={user._id}>
                            <Link to={`/api/user/${user._id}`}>{user.username}</Link>
                        </div>
                    ))}
                </h3>




                <h4>If there's no user,<Link to='/api/user/new'> click here!</Link></h4>
            </div>
        );
    }
}

export default ChooseAUser;