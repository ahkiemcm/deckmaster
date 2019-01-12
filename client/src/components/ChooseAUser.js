import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'


const Choose = styled.div`
margin-left: 340px;
`

class ChooseAUser extends Component {
    state = {
        users: []
    }
    //Call the user and set the state to the data recieved in response
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
            <Choose>
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
            </Choose>
        );
    }
}

export default ChooseAUser;