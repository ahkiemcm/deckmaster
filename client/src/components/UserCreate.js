import React, { Component } from 'react';
import axios from 'axios'


class UserCreate extends Component {

    state = {
        newUser: {
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        // Make post to our api to create new user
        axios.post('/user', this.state.newUser).then(res => {
            // when we get that data back, we need to navigate to the new users page
            console.log(res.data)
            this.props.history.push(`/user/${res.data._id}`)
        })

    }

    render() {
        return (
            <div>
                <h2>UserCreate:
                </h2>
                <form onSubmit={this.handleSubmit}>
                    Username:
                    <input type="text" name="username" id="" />
                    <br />
                    Password:
                    <input type="text" name="password" id="" />
                    <br />
                    Email:
                    <input type="text" name="email" id="" />
                    <br />
                    Sign up for email notifications about updates and offers?:
                    <input type="checkbox" name="newsletter" id="" />
                    <br />
                    <button type="submit">Create User</button>
                </form>
            </div>
        );
    }
}

export default UserCreate;