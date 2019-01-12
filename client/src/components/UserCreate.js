import React, { Component } from 'react';
import axios from 'axios'


class UserCreate extends Component {

    state = {
        newUser: {
            username: '',
            password: '',
            email: ''
        }
    }

    handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewUser = { ...this.state.newUser }

        // Event Target Name will be either 'username' or 'password'
        updatedNewUser[event.target.name] = event.target.value
        this.setState({ newUser: updatedNewUser })
    }


    handleSubmit = (event) => {
        event.preventDefault()

        // Make post to our api to create new user
        axios.post('/api/user', this.state.newUser).then(res => {
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
                    <div>
                        <label htmlFor="username">User Name: </label>
                        <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} value={this.state.newUser.password} type="password" name="password" />
                    </div>
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